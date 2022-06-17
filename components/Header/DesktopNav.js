import React from "react";
import ArrowDownSVG from "../SVG/Icons/ArrowDownSVG";

const DesktopNav = () => {
  return (
    <nav className="">
      <ul className="">
        <li>
          <button>
            <div>Features</div>
            <ArrowDownSVG />
          </button>
        </li>
        <li>
          <button>
            <div>Company</div>
            <ArrowDownSVG />
          </button>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <ul className="">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
