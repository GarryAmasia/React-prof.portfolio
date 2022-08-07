import React from "react";
import tailwind from "../assets/tailwind.png";
import web1 from "../assets/web1.jpg";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import guess from "../assets/guess.jpg";
import wip from "../assets/wip.jpg";
import movie from "../assets/movie-app.jpg";

const Works = () => {
  const projects = [
    {
      id: 1,
      img: web1,
      name: "Static Food website",
      tech: ["html", "css", "javascript"],
    },
    {
      id: 2,
      img: tailwind,
      name: "Prank Calculator",
      tech: ["html", "css", "javascript"],
    },
    {
      id: 3,
      img: guess,
      name: "Guess My Number",
      tech: ["html", "css", "javascript"],
    },
    {
      id: 4,
      img: css,
      name: "React Portfolio -v1",
      tech: ["React js"],
    },
    {
      id: 5,
      img: movie,
      name: "My Movie App",
      tech: ["React js"],
    },
    {
      id: 6,
      img: guess,
      name: "Not To do List",
      tech: ["React js", "Node js", "MongoDB"],
    },
    {
      id: 7,
      img: movie,
      name: "Full Stack E-commerce website",
      tech: ["React js", "Node js", "MongoDB"],
    },
  ];

  return (
    <div name="works" className=" w-full text-black md:h-full ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            PORTFOLIO
          </p>
          <p className="py-6">Check some of my works here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 width-[400px] height-[330px]">
          {projects.map(({ id, img, name, tech }) => {
            return (
              <div className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
                <div className="flex justify-center items-center inline-block ">
                  <img
                    style={{ width: 250, height: 250 }}
                    src={img}
                    alt=""
                    className="rounded-md duration-300 hover:scale-105  "
                  />
                </div>
                <div className="flex items-center justify-around">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
                <div className="text-center">
                  <p className="font-bold pb-2">{name}</p>
                  <p className="pb-2">{`Technology used : ${tech}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
