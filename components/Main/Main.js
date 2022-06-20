import React from "react";

// Custom Hooks imports
import useMediaQuery from "../Hooks/UseMediaQuery";

// Constant Imports
import { BREAKPOINT } from "../Constants/Breakpoints";

//component Imports
import MobileMain from "./MobileMain";
import DesktopMain from "./DesktopMain";

const Main = () => {
  const isBreakpoint = useMediaQuery(BREAKPOINT);
  return (
    <div className="max-w-6xl mx-auto">
      {isBreakpoint ? <MobileMain /> : <DesktopMain />}
    </div>
  );
};

export default Main;
