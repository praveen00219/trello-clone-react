import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./contexts/TaskContext"; // Import the provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      {" "}
      {/* Wrap your app with TaskProvider */}
      <App />
    </TaskProvider>
  </React.StrictMode>
);
