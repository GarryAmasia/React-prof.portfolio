import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[black] text-[white] h-full p-10">
      <div className="flex justify-center items-center">
        <div className="mt-10">
          <p className="text-center text-2xl">
            <span className="font-bold text-[#ff4362]">| </span>Experiences
          </p>
          <p className="mt-5">
            These are technologies i have been working with :
          </p>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={html}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#f06529] h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={css}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#264de4] h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={tailwind}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#4dc0b5] h-2.5 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={js}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#f0db4f] h-2.5 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={react}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#61DBFB] h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={node}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#44883e] h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={mongo}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#4DB33D] h-2.5 rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[90%] ">
        <div className="mt-10">
          <div className="flex justify-center items-center mb-4">
            <img
              className=""
              src={github}
              alt="html-logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-[-700]">
            <div
              className="bg-[#616161] h-2.5 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
