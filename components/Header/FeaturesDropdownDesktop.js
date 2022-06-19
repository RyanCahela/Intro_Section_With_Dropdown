import React, { useState } from "react";
import TodoSVG from "../SVG/Icons/TodoSVG";
import CalendarSVG from "../SVG/Icons/CalendarSVG";
import RemindersSVG from "../SVG/Icons/RemindersSVG";
import PlanningSVG from "../SVG/Icons/PlanningSVG";
import ArrowUpSVG from "../SVG/Icons/ArrowUpSVG";
import ArrowDownSVG from "../SVG/Icons/ArrowDownSVG";

const svgIconClasses = `
  absolute
  top-1/2
  left-0
  -translate-y-1/2
  -translate-x-1/2
`;

const liClasses = `flex items-center gap-4 relative pl-5 text-gray-500 hover:text-black`;

const buttonClasses = "hover:text-black ";
const buttonActiveClasses = "text-black";

const FeaturesDropdownDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className={`cursor-pointer relative ${
        isOpen ? buttonActiveClasses : buttonClasses
      }`}
      onClick={(e) => setIsOpen((prevState) => !prevState)}>
      <div className="flex items-center gap-2">
        <div>Features</div>
        {isOpen ? <ArrowDownSVG /> : <ArrowUpSVG />}
      </div>
      {isOpen ? (
        <ul className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg absolute z-40 top-10 right-0">
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
      ) : (
        ""
      )}
    </button>
  );
};

export default FeaturesDropdownDesktop;
