import React from "react";
import todo from "../assets/todo_img.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-9">
      <div className="py-2">
        <h1 className="text-3xl font-bold">
          Task<span className="text-primary">Master</span>
        </h1>
      </div>
      <div className="w-full h-[250px] bg-white">
        <img className="w-full h-full object-contain" src={todo} alt="" />
      </div>
      <div className="py-2">
        <p className="text-5xl font-medium">
          Manage Your Task with <span className="text-primary">TaskMaster</span>
        </p>
      </div>
      <button
        className="bg-primary text-black p-3 font-medium"
        onClick={() => navigate("/taskDetails")}
      >
        Let's Start
      </button>
    </div>
  );
};

export default Home;
