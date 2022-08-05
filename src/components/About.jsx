import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[white] text-[black]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="text-left sm:text-right pb-8 ">
            <p className="text-8xl font-bold inline border-r-4 border-pink-600 pr-3">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              <span className="text-5xl text-[#ff516e]">G</span>'day friends, i
              am Garry. Feel free to have tour around{" "}
            </p>
          </div>
          <div className="sm:border-t-4 ">
            <p className=" text-2xl">
              Motivated, web development student with experience building
              unbreakable and elegant JavaScript websites looking for an
              opportunity to grow front-end/full stack development skills in an
              growing environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
