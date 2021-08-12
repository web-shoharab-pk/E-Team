import React from "react";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import profile from "../../Assets/images/profile.jpg";

import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), content: "Implementing feature on dashboard", date: "Aug 11" },
  { id: uuidv4(), content: "Implementing feature on dashboard", date: "Aug 11" },
  { id: uuidv4(), content: "Implementing feature on dashboard", date: "Aug 11" },
  // { id: uuidv4(), content: "Fourth task", date: "Aug 11" },
  // { id: uuidv4(), content: "Fifth task", date: "Aug 11" }, 
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "TO DO",
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: "IN PROGRESS",
    items: [],
  },
  [uuidv4()]: {
    name: "DONE",
    items: [],
  },
  [uuidv4()]: {
    name: "DEPLOYED",
    items: [],
  },
};

const TaskBoard = () => {
  const [columns, setColumns] = useState<any>(columnsFromBackend);

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
                <h3 className="text-sm font-semibold text-blue-400">
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
                              : "lightgray",
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
                                      className="rounded-md"
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
                                          {item.content}
                                        </p>
                                      </div>
                                      <div className="flex justify-between pt-3">
                                        <p className="text-sm font-medium text-gray-500">
                                          {item.date}
                                        </p>
                                        <span>
                                          <img
                                            src={profile}
                                            alt="profile-pic"
                                            className="h-6 w-6 rounded-full"
                                          />
                                        </span>
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
