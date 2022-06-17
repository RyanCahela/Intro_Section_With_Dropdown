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
  return <>{isBreakpoint ? <MobileMain /> : <DesktopMain />}</>;
};

export default Main;
