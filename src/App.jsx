import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:boardId" element={<BoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
