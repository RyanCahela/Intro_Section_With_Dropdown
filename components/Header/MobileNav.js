import React, { useState } from "react";
import MenuSVG from "../SVG/Icons/MenuSVG";
import CloseMenuSVG from "../SVG/Icons/CloseMenuSVG";

const mobileNavClasses = `
  ${/* Layout */ ""}
  flex 
  flex-col

  fixed
  top-0
  right-0
  z-30
  
  w-[70vw]
  h-full

  pl-6
  pt-[72px]
  pr-5
  
  ${/* Colors */ ""}
  bg-white


  ${/* Transforms */ ""}
  transition-transform
  translate-x-full

`;

const mobileNavActiveClasses = `
  translate-x-0
`;

const backdropClasses = `
  before:fixed
  before:bg-black/0
  before:inset-0
  before:z-10
  before:transition-all
  before:w-full
  before:h-full
  before:pointer-events-none
  `;

const backdropActiveClasses = `
  before:bg-black/50
`;

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${backdropClasses} ${isOpen ? backdropActiveClasses : ""}`}>
      <button className="fixed top-5 right-5 z-40">
        {isOpen ? (
          <CloseMenuSVG setIsOpen={setIsOpen} />
        ) : (
          <MenuSVG setIsOpen={setIsOpen} />
        )}
      </button>
      <nav
        className={`${mobileNavClasses} ${
          isOpen ? mobileNavActiveClasses : ""
        }`}>
        <button>Features</button>
        <ul>
          <li>Todo List</li>
          <li>Calendar</li>
          <li>Reminders</li>
          <li>Planning</li>
        </ul>
        <button>Careers</button>
        <ul>
          <li>history</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
        <a href="#">Careers</a>
        <a href="#">About</a>

        <div>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
