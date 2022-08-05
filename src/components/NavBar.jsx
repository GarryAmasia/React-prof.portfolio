import React from "react";
import garry from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

export const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const handleOnClick = () => setToggle(!toggle);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff]">
      <div>
        <img
          src={garry}
          alt="garry_logo"
          style={{ width: "160px", height: "150px", paddingTop: "5px" }}
        />
      </div>

      {/*  menu */}
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact Me</li>
      </ul>

      {/* hamburger  */}
      <div onClick={handleOnClick} className="md:hidden z-10 cursor-pointer">
        {toggle ? <FaBars /> : <FaTimes className="text-[white]" />}
      </div>

      {/* mobile */}
      <div
        className={
          toggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center text-[white] "
        }
      >
        <ul>
          <li className="py-10 text-2xl">Home</li>
          <li className="py-10 text-2xl">About Me</li>
          <li className="py-10 text-2xl">Projects</li>
          <li className="py-10 text-2xl">Skills</li>
          <li className="py-10 text-2xl">Contact Me</li>
        </ul>
      </div>

      <div className="hidden md:flex fixed flex-col top-[45%] left-[0] ">
        <ul>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-[#0072b1] ">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={20} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-[#2e2929]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={20} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-[#428666]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={20} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-500 bg-[#ada428]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
