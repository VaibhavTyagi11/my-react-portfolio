import React from "react";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col justify-between items-center px-4 max-w-screen-lg mx-auto h-full md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold font-Fugaz text-white">Hii.. </h2>
          <p className="py-2 mx-w-md text-4xl sm:text-4xl font-bold font-Fugaz text-white">
            I'm <span className="text-yellow-300 font-Fugaz">V</span>aibhav
          </p>
          <p className="   typo py-2 mx-w-md text-4xl sm:text-4xl font-bold font-Fugaz text-white">
            Web Developer
          </p>
          <p className="py-1 mx-w-md font-Fugaz text-yellow-300 text-lg  inline-block ">
            A front-end Developer || Designer for fun
          </p>
          <div className="py-4">
            <Link to="Contact" scroll="smooth" duration={500}>
              <button className="bg-white text-black px-6 py-2 my-2 flex items-center rounded-md hover:scale-110 duration-200 font-Fugaz">
                Hire Me &nbsp;
                <span className="font-Fugaz text-xl pb-1"> &darr;</span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="./home.svg"
            alt="my profile"
            className="rounded-2xl mx-auto w-[800px] md:w-full h-[600px] "
          />
        </div>
      </div>
    </div>
  );
}
