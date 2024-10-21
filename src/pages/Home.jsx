import React from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../contexts/TaskContext";

const Home = () => {
  const { boards } = useTaskContext();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Boards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.keys(boards).map((boardId) => (
          <Link
            to={`/board/${boardId}`}
            key={boardId}
            className="bg-white shadow-md p-4 rounded-md"
          >
            <h2 className="text-xl font-semibold">{boards[boardId].name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
