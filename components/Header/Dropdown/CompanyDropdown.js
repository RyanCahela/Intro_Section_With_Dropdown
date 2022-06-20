import React, { useState } from "react";
import ArrowUpSVG from "../../SVG/Icons/ArrowUpSVG";
import ArrowDownSVG from "../../SVG/Icons/ArrowDownSVG";
import DropdownItem from "./DropdownItem";

const ulClasses = `
  flex
  flex-col
  gap-4
  
  opacity-0
  transition-all
  translate-x-full
  h-0
  
  md:absolute
  md:translate-x-0
  md:-translate-y-full
  md:bg-white
`;

const ulActiveClasses = `
  pl-6
  pt-6
  pb-6
  translate-x-0
  h-auto
  opacity-100
  
  md:-translate-y-0
  md:absolute
  md:rounded-lg
  md:shadow-lg
  md:left-0
  md:top-10
  md:p-6
  
`;

const CompanyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:relative">
      <button
        className="flex items-center gap-4"
        onClick={(e) => setIsOpen((prevState) => !prevState)}>
        <span>Company</span>
        <span>{isOpen ? <ArrowDownSVG /> : <ArrowUpSVG />}</span>
      </button>
      <ul className={`${ulClasses} ${isOpen ? ulActiveClasses : ""}`}>
        {[
          {
            textContent: "History",
            href: "#",
          },
          {
            textContent: "Our Team",
            href: "#",
          },
          {
            textContent: "Blog",
            href: "#",
          },
        ].map((props) => (
          <DropdownItem key={props.textContent} {...props} />
        ))}
      </ul>
    </div>
  );
};

export default CompanyDropdown;
