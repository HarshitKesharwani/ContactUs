import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="navbar flex border-b-4">
      <div className="mx-5 my-4 md:hidden ">
        <div className="bg-black w-6 h-0.5 my-1"></div>
        <div className="bg-black w-6 h-0.5 my-1"></div>
        <div className="bg-black w-6 h-0.5 my-1"></div>
      </div>
      <div>
        <FaPhoneVolume className="text-2xl mx-1 my-3 md:mx-3 md:text-4xl " />
      </div>
      <div className="my-3 justify-center text-2xl md: font-mono md:text-3xl">
        CONNECT WITH US
      </div>
      <div className="justify-content-end flex relative left-96">
        <div className=" mx-44 my-4 hidden md:block font-mono text-xl relative left-96 cursor-pointer">
          About us
        </div>
        <div className="  my-4 hidden md:block font-mono text-xl relative left-72  cursor-pointer">
          {" "}
          Help
        </div>
      </div>
    </div>
  );
}
