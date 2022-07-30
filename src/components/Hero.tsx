//@ts-nocheck
import React from "react";
import heroVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={heroVid}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form action="" className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text- black bg-gray-100/90 focus:scale-105">
          <div>
            <input className="bg-transparent w-[300px] sm:w-[400px] p-3 focus:outline-none text-black text-xl" type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button><AiOutlineSearch size={25} /></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
