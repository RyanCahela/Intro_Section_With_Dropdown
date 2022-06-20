import React, { useState } from "react";
import MenuSVG from "../SVG/Icons/MenuSVG";
import CloseMenuSVG from "../SVG/Icons/CloseMenuSVG";

import FeaturesDropdown from "./Dropdown/FeaturesDropdown";
import CompanyDropdown from "./Dropdown/CompanyDropdown";

const mobileNavClasses = `
  ${/* Layout */ ""}
  flex 
  flex-col
  gap-4

  fixed
  top-0
  right-0
  z-30
  
  w-[60vw]
  h-full

  pl-6
  pt-[72px]
  pr-5
  
  ${/* Colors */ ""}
  bg-white
  text-gray-500


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
  before:bg-black/80
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
        <FeaturesDropdown />
        <CompanyDropdown />

        <a href="#">Careers</a>
        <a href="#">About</a>

        <div className="flex flex-col mt-4 items-center gap-4">
          <a href="#">Login</a>
          <a
            className="border-black border border-solid self-stretch text-center py-2 rounded-lg border-"
            href="#">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
