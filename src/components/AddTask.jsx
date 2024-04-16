import React, { useState } from "react";
import Navbar from "./Navbar";
import { LuCalendarClock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskItem,
  clearFormData,
  saveToLocalStorage,
  updateFormData,
} from "../features/todo/todoSlice";

const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.todo.formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleBackClick = () => {
    navigate("/taskDetails");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const monthInWords = saveMonthInWords(formData.taskDate);
    const id = Date.now().toString();
    const newTask = { id, ...formData, taskDate: monthInWords };
    dispatch(addTaskItem(newTask));
    dispatch(saveToLocalStorage());
    dispatch(clearFormData());
    navigate("/taskDetails");
  };

  const saveMonthInWords = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      <Navbar onBackClick={handleBackClick} />
      <form className="flex flex-col gap-4 h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" htmlFor="taskTitle">
            Task Title
          </label>
          <input
            className="bg-secondary text-white px-4 py-2"
            type="text"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium" htmlFor="taskDesc">
            Task Description
          </label>
          <textarea
            className="bg-secondary text-white px-4 py-2"
            name="taskDesc"
            id=""
            cols="30"
            rows="5"
            value={formData.taskDesc}
            onChange={handleChange}
            placeholder="Enter task Description"
          ></textarea>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 relative">
            <span className="absolute bottom-0 text-4xl py-[3px] px-2 bg-primary text-black">
              <LuCalendarClock />
            </span>
            <label className="text-lg font-medium" htmlFor="taskDate">
              Task Date
            </label>
            <input
              className="bg-secondary text-white px-4 py-2 ml-14"
              type="date"
              name="taskDate"
              value={formData.taskDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="bg-primary text-black mt-auto p-3">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
