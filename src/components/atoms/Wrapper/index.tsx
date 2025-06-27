import { clsx } from "clsx";
import React from "react";

const Wrapper = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) => {
  return (
    <div
      className={clsx(
        "lg:max-w-[1264px] mx-auto xl:px-0 lg:px-8 px-6 sm:px-6",
        style && style
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
