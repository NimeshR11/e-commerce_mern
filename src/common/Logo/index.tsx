import React from "react";
import LogoImage from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img
        src={LogoImage}
        alt="logo"
        width={50}
        height={50}
        className="bg-transparent"
      />
    </NavLink>
  );
};

export default Logo;
