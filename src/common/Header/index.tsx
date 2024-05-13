import React from "react";
import Logo from "../Logo";

const Header = () => {
  return (
    <nav className="bg-lightblue-200 text-lightblue-100 py-4 px-12 flex justify-between">
      <div className="bg-lightblue-100 rounded-full flex items-center justify-center">
        <Logo />
      </div>
          <div>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
      </div>
    </nav>
  );
};

export default Header;
