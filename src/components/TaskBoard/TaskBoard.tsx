import React from "react";
import Done from "./Done";
import InProgress from "./InProgress";
import ToDo from "./ToDo";

const TaskBoard = () => {
  return (
    <div>
      <main className="p-3 flex">
        <ToDo />
        <InProgress />
        <Done />
      </main>
    </div>
  );
};

export default TaskBoard;
