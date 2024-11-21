import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className=" flex gap-4 items-center">
        <AiOutlineMenu
          onClick={() => setNav(!nav)}
          className=" cursor-pointer"
          size={30}
        />
        <h1 className=" font-medium text-2xl md:tex-3xl lg:text-4xl">
          Best <span className=" font-bold">Eats</span>
        </h1>
        <div className=" hidden  lg:flex items-center rounded-full p-1 text-[]14px  bg-gray-300">
          <p className="  bg-black text-white  rounded-full p-2 ">Dilevery</p>
          <p className="  text-black p-2  ">Pickups</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />

        <input
          className=" bg-transparent w-full p-2  focus:outline-none "
          type="text"
          placeholder=" Search....."
        />
      </div>
      <div className=" hidden md:flex">
        <button className=" flex items-center gap-3 py-2 px-5 rounded-full bg-black text-white">
          <IoCart size={25} /> Cart
        </button>
      </div>
      {nav ? (
        <div className=" bg-black/75 z-10 absolute w-full h-screen duration-300  top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? " bg-white text-black w-[300px] h-screen absolute top-0 left-0 z-20 duration-300"
            : " bg-white text-black w-[300px] h-screen absolute top-0 left-[-100%] z-20"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="absolute top-4 right-4 cursor-pointer"
          size={25}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
