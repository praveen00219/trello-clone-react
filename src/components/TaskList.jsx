import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { useTaskContext } from "../contexts/TaskContext";

const TaskList = ({ listName, tasks }) => {
  const { addTask } = useTaskContext();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(1, listName, { title: newTask });
      setNewTask("");
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">{listName}</h2>
      <div>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="p-2 w-full border rounded-md"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
        />
        <button
          onClick={handleAddTask}
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
