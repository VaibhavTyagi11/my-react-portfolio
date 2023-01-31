import React from "react";


export default function Contact() {
  return (
    <div name="Contact" className="w-full h-screen p-4 ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl font-Fugaz flex justify-center">CONTACT</p>
          <p className="py-4 flex justify-center text-xl font-Dancing">LET'S  CONNECT  AND  DISCUSS</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/8640985c-f400-4bca-9f08-ab746df7523a" 
          method="POST"
          className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="p-2 border-2 rounded-md focus:outline-none font-Dancing "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="my-4 p-2 border-2 rounded-md focus:outline-none font-Dancing"
            />
            <textarea
              name="massege"
              placeholder="Enter a massege"
              rows="10"
              className="p-2 border-2 rounded-md focus:outline-none font-Dancing"
            ></textarea>
             <button
                className="btn2 px-6 py-4 my-2 relative border border-gray-300 uppercase font-Dancing tracking-wider leading-none overflow-hidden hover:text-white rounded-xl"
                type="button"
              >
                <span className="absolute inset-0 bg-black"></span>
                <span className="absolute inset-0 flex justify-center items-center font-Dancing">
                  Send
                </span>
                Send
              </button>
          </form>
        </div>


      </div>
    </div>
  );
}
