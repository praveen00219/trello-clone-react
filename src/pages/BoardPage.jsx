import React from "react";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../contexts/TaskContext";
import TaskList from "../components/TaskList";

const BoardPage = () => {
  const { boardId } = useParams();
  const { boards } = useTaskContext();
  const board = boards[boardId];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{board.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.keys(board.lists).map((listName) => (
          <TaskList
            key={listName}
            listName={listName}
            tasks={board.lists[listName].tasks}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
