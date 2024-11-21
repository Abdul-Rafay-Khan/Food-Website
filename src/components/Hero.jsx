import React from "react";
import burger from "../assets/burger1.jpg";

const Hero = () => {
  return (
    <div className="   w-full max-w-[1640px] mx-auto p-4 max-h-[500px]">
      <div className=" relative max-h-[500px]">
        <div className=" absolute h-full bg-black/40 w-full max-h-[500px] text-white flex flex-col justify-center font-bold">
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            The <span className=" text-orange-500">Best</span>
          </h1>
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            <span className=" text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className=" max-h-[500px] w-full object-cover  "
          src={burger}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
