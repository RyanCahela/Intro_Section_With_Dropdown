import React, { useState } from "react";
import ArrowDownSVG from "../SVG/Icons/ArrowDownSVG";
import ArrowUpSVG from "../SVG/Icons/ArrowUpSVG";
import TodoSVG from "../SVG/Icons/TodoSVG";
import CalendarSVG from "../SVG/Icons/CalendarSVG";
import RemindersSVG from "../SVG/Icons/RemindersSVG";
import PlanningSVG from "../SVG/Icons/PlanningSVG";

const liClasses = `flex items-center gap-4 relative pl-5`;

const ulClasses = `
  flex
  flex-col
  gap-4 

  
  opacity-0
  h-0
  
  transition-all
  translate-x-full
  `;

const ulActiveClasses = `
  pt-6
  pb-6
  pl-6
  opacity-100 
  h-auto
  translate-x-0
`;

const svgIconClasses = `
  absolute
  top-1/2
  left-0
  -translate-y-1/2
  -translate-x-1/2
`;

const FeaturesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center gap-4"
        onClick={(e) => setIsOpen((prevState) => !prevState)}>
        <span>Features</span>
        <span>{isOpen ? <ArrowDownSVG /> : <ArrowUpSVG />}</span>
      </button>
      <ul className={`${ulClasses} ${isOpen ? ulActiveClasses : ""}`}>
        <li className={liClasses}>
          <TodoSVG className={svgIconClasses} />
          <span>Todo List</span>
        </li>
        <li className={liClasses}>
          <CalendarSVG className={svgIconClasses} />
          <span>Calendar</span>
        </li>
        <li className={liClasses}>
          <RemindersSVG className={svgIconClasses} />
          <span>Reminders</span>
        </li>
        <li className={liClasses}>
          <PlanningSVG className={svgIconClasses} />
          <span>Planning</span>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesDropdown;
