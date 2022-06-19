import React from "react";

//component imports
import HeaderLogo from "../Header/HeaderLogo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

//hooks imports
import useMediaQuery from "../Hooks/UseMediaQuery";

//constant imports
import { BREAKPOINT } from "../Constants/Breakpoints";

const headerClasses = `
  ${/* Layout */ ""}
  p-4
  flex  

`;

const Header = () => {
  const isBreakpoint = useMediaQuery(BREAKPOINT);
  return (
    <header className={headerClasses}>
      <HeaderLogo />
      <div className="flex-auto">
        {isBreakpoint ? <MobileNav /> : <DesktopNav />}
      </div>
    </header>
  );
};

export default Header;
