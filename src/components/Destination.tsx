// @ts-nocheck
import React from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

const Destination: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-16 px-4">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribean's Best Beaches</p>
      <div className="grid md:grid-cols-5 py-4 gap-4 md:gap-5">
            <img src={BoraBora} className='cursor-pointer hover:scale-105 duration-300 h-full w-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-lg' alt="" />
            <div><img src={BoraBora2} className='cursor-pointer rounded-lg hover:scale-105 duration-300 h-full w-full object-cover' alt="" /></div>
            <div><img src={Maldives} className='cursor-pointer rounded-lg hover:scale-105 duration-300 h-full w-full object-cover' alt="" /></div>
            <div><img src={Maldives2} className='cursor-pointer rounded-lg hover:scale-105 duration-300 h-full w-full object-cover' alt="" /></div>
            <div><img src={KeyWest} className='cursor-pointer rounded-lg hover:scale-105 duration-300 h-full w-full object-cover' alt="" /></div>
      </div>
    </div>
  );
};

export default Destination;
