import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link, useParams } from "react-router-dom";
import firebase from "firebase/app";
import { UserDataContext } from "../../Contexts/UserDataContext";

const db = firebase.firestore();

const TaskBoard = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [userList, setUserList] = useState([] as object[])
  const [columns, setColumns] = useState({} as any);
  const [tempData, setTempData] = useState([] as object[])
  const [todoData, setTodoData] = useState({ name: "To Do", items: [] as object[] })
  const [inProgressData, setInProgressData] = useState({ name: "In Progress", items: [] as object[] })
  const [doneData, setDoneData] = useState({ name: "Done", items: [] as object[] })
  const [deployedData, setDeployedData] = useState({ name: "Deployed", items: [] as object[] })

  const {sprint_id}:any = useParams()
// console.log(sprint_id,tempData);

  useEffect(() => {
    // For getting task list
    db.collection('task_list')
      .where('co_id', '==', userData.co_id)
      .where('sprint_id', '==', sprint_id)
      .get()
      .then((data: any) =>setTempData(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))))

    // For getting user list
    db.collection('users')
      .where('co_id', '==', userData?.co_id)
      .get()
      .then((data: any) => {
        setUserList(data.docs.map((doc: any) => doc.data()));
      })
  }, [])

  useEffect(() => {
    // For setting todo Data
    setTodoData({ ...todoData, items: tempData?.filter((task: any) => task?.status === 'todo') })
    setInProgressData({ ...inProgressData, items: tempData?.filter((task: any) => task?.status === 'in_progress') })
    setDoneData({ ...doneData, items: tempData?.filter((task: any) => task?.status === 'done') })
    setDeployedData({ ...deployedData, items: tempData?.filter((task: any) => task?.status === 'deployed') })
  }, [tempData])

  useEffect(() => {
    setColumns({ todo: todoData, in_progress: inProgressData, done: doneData, deployed: deployedData })
  }, [todoData, inProgressData, doneData, deployedData])

  // update task details when onDragEnd event called
  const handleOnDragEnd = (taskId: string, taskStatus: string) => {
    db.collection('task_list')
      .doc(taskId)
      .update({ status: taskStatus })
  }

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      // For updating in database
      handleOnDragEnd(removed.id, destination.droppableId);

      // For updating in state
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <>
      <h3 className="text-center text-3xl font-bold p-2">TaskBoard</h3>
      <Link to={"/add-task/" + sprint_id} className="inline-block mb-7 ml-5 bg-blue-500 border text-white border-blue-500 hover:bg-white hover:text-blue-500  py-2 px-8 rounded-full">
        <i className="fas fa-plus"></i> Add Task
      </Link>
      <Link to="/sprint-list" className="inline-block mb-7 ml-5 bg-blue-500 border text-white border-blue-500 hover:bg-white hover:text-blue-500  py-2 px-8 rounded-full">
        <i className="fas fa-list"></i> All Sprint Board
      </Link>
      <div
        style={{ display: "flex", justifyContent: "center", height: "auto" }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]: any, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h3 className="text-sm font-semibold bg-gray-300 px-20 rounded text-blue-400">
                  {column.name}
                </h3>
                <div style={{ margin: 7 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className="rounded"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "#d1d5db",
                            padding: 7,
                            width: 250,
                            minHeight: 90,
                          }}
                        >
                          {column.items.map((item: any, index: any) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className="rounded-md shadow-sm"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 10,
                                        margin: "0 0 8px 0",
                                        minHeight: "30px",
                                        backgroundColor: snapshot.isDragging
                                          ? "lightgray"
                                          : "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <div>
                                        <p className="text-sm font-medium text-gray-900">
                                          {item.taskName}
                                        </p>
                                        {
                                          userList.find((user: any) => item.userId === user.id) &&
                                          userList.map((user: any) => (user.id === item.userId ?
                                            <p className="text-xs font-medium text-gray-900">{user.name}</p> :
                                            null))
                                        }
                                      </div>
                                      <div className="flex justify-between pt-3">
                                        <p className="text-sm font-medium text-gray-500">
                                          {item.date}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
};

export default TaskBoard;
