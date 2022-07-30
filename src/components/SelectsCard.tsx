import React from "react";
interface IProps {
  bg: any;
  text: string;
}
const SelectsCard: React.FC<IProps> = ({ bg, text }) => {
  return (
    <div className="relative hover:scale-105 duration-300">
      <img src={bg} className='w-full h-full object-cover rounded-lg' alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full rounded-lg">
        <p className="absolute bottom-4 left-4 text-white text-xl">{text}</p>
      </div>
    </div>
  );
};

export default SelectsCard;
