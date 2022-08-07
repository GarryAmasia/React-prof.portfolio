import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="hero" className="bg-[black] h-screen ">
      <div className=" max-w-1200px mx-auto px-8 flex flex-col justify-center h-full text-white md:ml-16 ">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          Garry Amasia
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#adadad] max-w-[600px]">
          | Full Stack Developer student |
        </h2>
        <p>
          at <span className="text-[#5a81ff]">Dented</span>{" "}
          <span className="text-[#c22626]">Code</span>
        </p>
        <p className="py-4 max-w-[700px]">
          I am web developer specializing in MERN stack. A self-motivated IT
          professional with fair knowledge in JavaScript, HTML, CSS, and mobile
          responsive web development, as well as strong skills and ability in
          writing clean and efficient code.
        </p>
        <div>
          <Link to="works" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 duration-500 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-100">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
