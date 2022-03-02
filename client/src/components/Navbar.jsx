import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../images/logodarkno.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-items-center justify-between items-center p-4">
      <div className="md:flex[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className=" cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
