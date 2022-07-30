import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES.</h1>
          <div className="flex justify-evenly w-full sm:max-w-[280px] my-4">
            <FaFacebook
              size={30}
              className="text-indigo-600 cursor-pointer hover:scale-110 duration-200"
            />
            <FaTwitter
              size={30}
              className="text-indigo-600 cursor-pointer hover:scale-110 duration-200"
            />
            <FaYoutube
              size={30}
              className="text-indigo-600 cursor-pointer hover:scale-110 duration-200"
            />
            <FaPinterest
              size={30}
              className="text-indigo-600 cursor-pointer hover:scale-110 duration-200"
            />
            <FaInstagram
              size={30}
              className="text-indigo-600 cursor-pointer hover:scale-110 duration-200"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li className="hover:text-indigo-600">About</li>
            <li className="hover:text-indigo-600">Partnerships</li>
            <li className="hover:text-indigo-600">Careers</li>
            <li className="hover:text-indigo-600">Newsroom</li>
            <li className="hover:text-indigo-600">Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li className="hover:text-indigo-600">Home</li>
            <li className="hover:text-indigo-600">Destinations</li>
            <li className="hover:text-indigo-600">Travel</li>
            <li className="hover:text-indigo-600">View</li>
            <li className="hover:text-indigo-600">Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
