import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import { sliceText } from "../utility/TextUtils";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTaskItem, saveToLocalStorage } from "../features/todo/todoSlice";

const TaskView = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleDeleteTask = () => {
    dispatch(removeTaskItem(task.id));
    dispatch(saveToLocalStorage());
    navigate("/taskDetails");
  };

  if (!task) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{task.taskTitle}</h1>
        <div className="flex gap-6">
          <div className="flex items-center gap-4 relative">
            <div className="w-fit bg-primary text-black p-3">
              <LuCalendarClock className="text-2xl" />
            </div>
            <p className="font-semibold">
              <span className="font-normal text-[13px] text-textShade">
                Due Date
              </span>
              <br />
              {task.taskDate}
            </p>
            <MdDelete className="absolute right-[-100px] text-3xl text-red-600 cursor-pointer" onClick={handleDeleteTask} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Task Description</h3>
        <p className="text-textShade text-sm">{sliceText(task.taskDesc, 90)}</p>
      </div>
    </>
  );
};

export default TaskView;
