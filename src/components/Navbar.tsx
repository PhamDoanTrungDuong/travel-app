import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="flex w-full text-white justify-between items-center h-20 px-4 absolute z-10">
      <div>
        <h1 className="cursor-pointer">BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="hover:underline hover:underline-offset-8">Home</li>
        <li className="hover:underline hover:underline-offset-8">Destinations</li>
        <li className="hover:underline hover:underline-offset-8">Travel</li>
        <li className="hover:underline hover:underline-offset-8">View</li>
        <li className="hover:underline hover:underline-offset-8">Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={25} className='cursor-pointer mr-3 hover:scale-110 duration-300'/>
        <BsPerson size={25} className='cursor-pointer hover:scale-110 duration-300' />
      </div>

      {/* Mobile Menu */}
      <div className={nav ? "block md:hidden z-10 text-black" : "block md:hidden z-10"} onClick={() => handleNav()}>
        {!nav ? (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineClose size={20} className="cursor-pointer" />
        )}
      </div>
      <div className={nav ? "absolute duration-300 md:hidden top-0 h-screen left-0 w-full bg-gray-100 px-4 py-7 flex flex-col" : "absolute duration-300 md:hidden top-0 left-[-100%] w-full h-screen bg-gray-100 px-4 py-7 flex flex-col"}>
        <ul>
          <h1 className="text-black pb-4">BEACHES.</h1>
          <li className="border-b-2 text-black">Home</li>
          <li className="border-b-2 text-black">Destinations</li>
          <li className="border-b-2 text-black">Travel</li>
          <li className="border-b-2 text-black">View</li>
          <li className="border-b-2 text-black">Book</li>
          <div className="flex flex-col my-8">
            <button className="m-3">Search</button>
            <button className="m-3">Account</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
