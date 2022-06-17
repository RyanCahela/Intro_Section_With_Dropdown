import React, { useState } from "react";
import MenuSVG from "../SVG/Icons/MenuSVG";
import CloseMenuSVG from "../SVG/Icons/CloseMenuSVG";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <CloseMenuSVG setIsOpen={setIsOpen} />
      ) : (
        <MenuSVG setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default MobileNav;
