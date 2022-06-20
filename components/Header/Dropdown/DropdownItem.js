import React from "react";

const DropdownItem = ({ iconSVG, textContent, href }) => {
  return (
    <li className={`flex items-center gap-4 relative ${iconSVG ? "pl-5" : ""}`}>
      {iconSVG ? (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
          {iconSVG}
        </div>
      ) : (
        ""
      )}
      <a className="w-max hover:text-black" href={href}>
        {textContent}
      </a>
    </li>
  );
};

export default DropdownItem;
