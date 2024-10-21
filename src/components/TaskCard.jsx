import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-2">
      <p>{task.title}</p>
    </div>
  );
};

export default TaskCard;
