import { clsx } from "clsx";
import React from "react";

const IntroSectionWrapper = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) => {
  return (
    <div
      className={clsx(
        "w-full h-min-[433px] px-2 py-4 lg:px-8 lg:py-6  border-amethystGray rounded-2xl border-4 bg-gray-amethyst",
        style && style
      )}
    >
      {children}
    </div>
  );
};

export default IntroSectionWrapper;
