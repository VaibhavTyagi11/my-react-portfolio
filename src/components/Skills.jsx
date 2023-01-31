import React from "react";

import reactimg from "../img/react.png";
import remiximg from "../img/remix.png";
import tailwind from "../img/tailwind.png";
import antdimg from "../img/antd.png";
import figmaimg from '../img/figma.png'





export default function Skills() {
  const techs = [
    {
      id: 1,
      src: reactimg,
      title: "REACT",
      style: "shadow-white",
    },
    {
      id: 2,
      src: remiximg,
      title: "REMIX",
      style: "shadow-white",
    },
    {
      id: 3,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: antdimg,
      title: "ANT DESIGN",
      style: "shadow-yellow-300",
    },
    {
      id: 5,
      src: figmaimg,
      title: "Figma",
      style: "shadow-red-300",
    },
  ];

  return (
    <div name="Skills" className="h-screen w-full mt-64 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div>
          <p className="text-3xl font-Fugaz p-2 flex justify-center text-white">SKILLS </p>
          <p className="py-4 text-2xl font-Dancing flex justify-center text-white"> TECHNOLOGIES I HAVE WORKED WITH</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center text-white font-Fugaz py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
