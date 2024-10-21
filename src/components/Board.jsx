import React from "react";
import { useBoard } from "../context/TaskContext";
import List from "./TaskList";

const Board = () => {
  const { boards } = useBoard();

  return (
    <div className="flex flex-col md:flex-row p-4">
      {boards.map((board) => (
        <div
          key={board.id}
          className="border rounded-lg p-4 m-2 w-full md:w-1/3"
        >
          <h2 className="text-xl font-bold">{board.title}</h2>
          <div className="mt-4">
            {board.lists.map((list) => (
              <List key={list.id} list={list} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
