import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TaskLists from "./components/TaskLists";
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
  return (
    <div className="w-[400px] h-[95vh] bg-containerBg mx-auto my-2 px-6 py-4 relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskDetails" element={<TaskLists />} />
        <Route path="/addTask" element={<AddTask />} />
      </Routes>
    </div>
  );
};

export default App;
