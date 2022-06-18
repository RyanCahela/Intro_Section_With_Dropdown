import React, { useState } from "react";
import ArrowUpSVG from "../SVG/Icons/ArrowUpSVG";
import ArrowDownSVG from "../SVG/Icons/ArrowDownSVG";

const ulClasses = `
  flex
  flex-col
  gap-4
  absolute
  
  
  opacity-0
  transition-all
  translate-x-full
  h-0
  `;

const ulActiveClasses = `
  pl-6
  pt-6
  pb-6
  relative
  translate-x-0
  h-auto
  opacity-100
`;

const CompanyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center gap-4"
        onClick={(e) => setIsOpen((prevState) => !prevState)}>
        <span>Company</span>
        <span>{isOpen ? <ArrowDownSVG /> : <ArrowUpSVG />}</span>
      </button>
      <ul className={`${ulClasses} ${isOpen ? ulActiveClasses : ""}`}>
        <li>history</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default CompanyDropdown;
