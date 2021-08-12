import React from "react";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import profile from "../../Assets/images/profile.jpg";

// const props {
//     id: number,
//     name: string,
//     date: string,
// }
const listItems = [
  {
    id: "a",
    name: "Taskboard page design",
    date: "Aug 11",
  },
  {
    id: "b",
    name: "Taskboard page design",
    date: "Aug 11",
  },
];

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//   background: isDragging ? "#4a2975" : "gray",
//   color: isDragging ? "white" : "black",

//   ...draggableStyle,
// });

const ToDo = () => {
  const [todo, setTodo] = useState(listItems);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(todo);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setTodo(items);
  };
  return (
    <>
      <div className="p-3 w-80 bg-gray-100 rounded">
        <h3 className="text-sm font-medium text-gray-900">TO DO</h3>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todo.map(({ id, name, date }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <a
                            href="#"
                            className="block p-5 bg-white rounded-md mb-2"
                          >
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {name}
                              </p>
                            </div>
                            <div className="flex justify-between pt-3">
                              <p className="text-sm text-gray-600">{date}</p>
                              <span>
                                <img
                                  src={profile}
                                  alt="profile-pic"
                                  className="h-6 w-6 rounded-full"
                                />
                              </span>
                            </div>
                          </a>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default ToDo;
