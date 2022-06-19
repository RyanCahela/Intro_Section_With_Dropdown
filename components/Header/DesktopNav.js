import React from "react";
import ArrowDownSVG from "../SVG/Icons/ArrowDownSVG";
import FeaturesDropdownDesktop from "./FeaturesDropdownDesktop";

const DesktopNav = () => {
  return (
    <nav className="flex text-gray-500">
      <ul className="flex gap-10 pl-[60px]">
        <li>
          <FeaturesDropdownDesktop />
        </li>
        <li>
          <button>
            <div className="hover:text-black cursor-pointer">Company</div>
            <ArrowDownSVG />
          </button>
        </li>
        <li className="hover:text-black cursor-pointer">
          <a href="#">Careers</a>
        </li>
        <li className="hover:text-black cursor-pointer">
          <a href="#">About</a>
        </li>
      </ul>
      <ul className="ml-auto flex gap-10">
        <li className="hover:text-black cursor-pointer">
          <a href="#">Login</a>
        </li>
        <li className="hover:text-black cursor-pointer">
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
