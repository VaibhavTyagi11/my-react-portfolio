import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "animate.css";

export default function Nav2() {
  const [nav, SetNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div>
      <div
        name="Nav2"
        className="flex flex-col justify-center items-center pt-10"
      >
        <h1 className="font-Fugaz text-3xl animate__hinge "> vaibhav</h1>
        <hr className="w-[20rem] h-[2px] mt-4 bg-slate-800" />
      </div>

      <div className="flex justify-center items-center w-full h-20 px-4 ">
        <ul className="hidden md:flex ">
          {links.map(({ link, id }) => {
            return (
              <li
                key={id}
                className="px-10 cursor-pointer text-2xl  font-Dancing hover:scale-125 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          onClick={() => SetNav(!nav)}
          className="cursor-pointer text-black pr-4 z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-100 to-slate-500 text-black">
            {links.map(({ link, id }) => {
              return (
                <li
                  key={id}
                  className="px-4 cursor-pointer py-6 text-2xl font-Dancing hover:scale-125 duration-200"
                >
                  <Link
                    onClick={() => SetNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
