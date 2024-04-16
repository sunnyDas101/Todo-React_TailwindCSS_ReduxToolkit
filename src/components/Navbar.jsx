import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ onBackClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (location.pathname === "/taskDetails") {
      onBackClick();
    }
    if (location.pathname === "/addTask") {
      onBackClick();
    }
    if (location.pathname === "/taskInfo") {
      onBackClick();
    }
  };

  return (
    <div className="flex justify-between items-center text-2xl p-2">
      <IoMdArrowRoundBack
        className="cursor-pointer hover:text-primary transition duration-100 ease-in-out"
        onClick={handleBackClick}
      />
      <h1 className="text-xl">Task Details</h1>
      <IoCreateOutline
        className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
        onClick={() => navigate("/addTask")}
      />
    </div>
  );
};

export default Navbar;
