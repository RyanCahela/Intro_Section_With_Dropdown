import React from "react";
import LogoSVG from "../SVG/LogoSVG";
import ArrowDownSVG from "../SVG/ArrowDownSVG";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <LogoSVG />
          </li>
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
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
