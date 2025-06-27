import { useEffect, useState } from "react";

import breakpoints from "@/utils/breakpoints";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useBreakpoint = (): string => {
  const [breakpoint, setBreakPoint] = useState<string>("");
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (windowSize.width !== undefined) {
      if (0 < windowSize.width && windowSize.width < 600) {
        setBreakPoint(breakpoints[0]);
      } else if (600 < windowSize.width && windowSize.width < 960) {
        setBreakPoint(breakpoints[600]);
      } else if (960 < windowSize.width && windowSize.width < 1024) {
        setBreakPoint(breakpoints[960]);
      } else if (1024 < windowSize.width && windowSize.width < 1920) {
        setBreakPoint(breakpoints[1024]);
      } else if (windowSize.width >= 1920) {
        setBreakPoint(breakpoints[1920]);
      }
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return breakpoint;
};

export default useBreakpoint;
