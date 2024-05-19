import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import Input from "../Input";
const Header = () => {
  return (
    <nav className="bg-lightblue-500  py-4 px-12 flex justify-between items-center gap-5">
      <div className="bg-lightblue-100 rounded-full flex items-center justify-center">
        <Logo />
      </div>
      <div className="max-w-[600px] w-full">
        <Input
          type="search"
          placeholder="Search Anything Here"
          variant="input__border"
          className="w-full"
        />
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li className="text-lightblue-100 py-2.5 px-2.5 text-3 leading-4 font-400 flex items-center gap-2">
            <GrLocation /> Location
          </li>
          <li className="text-lightblue-100 py-2.5 px-2.5 text-3 leading-4 font-400 flex items-center gap-2">
            <TfiWorld />
            Language
          </li>
          <li className=" bg-lightblue-100 text-lightblue-400 py-2.5 px-4 text-3 leading-4 font-400 border rounded-full flex items-center hover:bg-transparent hover:text-lightblue-100 hover:border-lightblue-100">
            <NavLink to={"/signin"} className="flex items-center gap-2">
              {" "}
              <CiUser className="text-3" />
              SignIn
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
