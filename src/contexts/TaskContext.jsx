import React, { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [boards, setBoards] = useState({
    // Default board with example lists and tasks
    1: {
      id: 1,
      name: "Project Board",
      lists: {
        "to-do": { name: "To Do", tasks: [] },
        "in-progress": { name: "In Progress", tasks: [] },
        done: { name: "Done", tasks: [] },
      },
    },
  });

  const addTask = (boardId, listName, task) => {
    const updatedBoards = { ...boards };
    updatedBoards[boardId].lists[listName].tasks.push(task);
    setBoards(updatedBoards);
  };

  return (
    <TaskContext.Provider value={{ boards, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
