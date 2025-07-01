// import { logos } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import { logos } from "@/constants";

const BrandLogoList = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1377px] overflow-x-auto ml-6 h-[89px] sm:h-[146px] flex scrollbar-hide scroll-smooth touch-auto items-center gap-3 lg:gap-6">
          {logos.map((logo, index) => (
            <div key={index} className={clsx("relative flex-shrink-0", logo.className)}>
              <Image src={logo.src} alt="" fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoList;
