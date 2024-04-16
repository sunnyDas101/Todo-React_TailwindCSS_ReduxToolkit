import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TaskView from "./TaskView";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { sliceText } from "../utility/TextUtils";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskCompletion } from "../features/todo/todoSlice";

const TaskLists = () => {
  const navigate = useNavigate();
  const [showTaskView, setShowTaskView] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const toggleTaskView = (taskId) => {
    setShowTaskView(!showTaskView);
    setSelectedTask(taskId);
  };

  const handleBackClick = () => {
    setShowTaskView(false);
    navigate("/");
  };

  const handleToggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      <Navbar onBackClick={handleBackClick} />
      {showTaskView && (
        <TaskView task={todos.find((task) => task.id === selectedTask)} />
      )}
      <div className="flex flex-col gap-2 overflow-auto">
        <h3 className="text-lg font-medium">All Tasks</h3>
        <ul className="flex flex-col gap-4 pr-3 overflow-y-auto">
          {todos.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-secondary p-4"
              onClick={() => toggleTaskView(task.id)}
            >
              <h3 className="text-lg overflow-hidden whitespace-nowrap">
                {sliceText(task.taskTitle, 25)}
              </h3>
              <div className="flex gap-4">
                <span
                  className="bg-primary text-black p-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTaskView(task.id);
                  }}
                >
                  {selectedTask === task.id && showTaskView ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>
                <span
                  className="bg-primary text-black p-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleCompletion(task.id);
                  }}
                >
                  {task.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center absolute bottom-0 left-0 w-full h-[80px] bg-footerBg">
        <button
          className=" bg-primary text-black p-3 w-[80%] font-medium"
          onClick={() => navigate("/addTask")}
        >
          Create a Task
        </button>
      </div>
    </div>
  );
};

export default TaskLists;
