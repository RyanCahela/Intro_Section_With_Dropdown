import React, { useState } from "react";
import ArrowDownSVG from "../../SVG/Icons/ArrowDownSVG";
import ArrowUpSVG from "../../SVG/Icons/ArrowUpSVG";
import TodoSVG from "../../SVG/Icons/TodoSVG";
import CalendarSVG from "../../SVG/Icons/CalendarSVG";
import RemindersSVG from "../../SVG/Icons/RemindersSVG";
import PlanningSVG from "../../SVG/Icons/PlanningSVG";

import DropdownItem from "./DropdownItem";

const ulClasses = `
  flex
  flex-col
  gap-4 

  
  opacity-0
  h-0
  
  transition-all
  translate-x-full

  md:absolute
  md:right-0
  md:top-10
  md:rounded-lg
  md:shadow-lg
  md:translate-x-0
  md:-translate-y-full
  md:bg-white
  `;

const ulActiveClasses = `
  pt-6
  pb-6
  pl-6
  opacity-100
  h-auto
  translate-x-0
  
  md:p-6
  md:-translate-y-0
  md:w-max
`;

const FeaturesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:relative">
      <button
        className="flex items-center gap-4 md:relative"
        onClick={(e) => setIsOpen((prevState) => !prevState)}>
        <span>Features</span>
        <span>{isOpen ? <ArrowDownSVG /> : <ArrowUpSVG />}</span>
      </button>
      <ul className={`${ulClasses} ${isOpen ? ulActiveClasses : ""}`}>
        {[
          {
            iconSVG: <TodoSVG />,
            textContent: "Todo List",
            href: "#",
          },
          {
            iconSVG: <CalendarSVG />,
            textContent: "Calendar",
            href: "#",
          },
          {
            iconSVG: <RemindersSVG />,
            textContent: "Reminders",
            href: "#",
          },
          {
            iconSVG: <PlanningSVG />,
            textContent: "Planning",
            href: "#",
          },
        ].map((props) => (
          <DropdownItem key={props.textContent} {...props} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturesDropdown;
