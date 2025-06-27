import { logos } from "@/constants";
import Image from "next/image";

const BrandLogoList = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1377px] overflow-x-auto whitespace-nowrap ml-6 h-[89px] sm:h-[146px] flex items-center gap-3 lg:gap-6 scrollbar-hide scroll-smooth touch-auto">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt=""
              width={1}
              height={1}
              className={`inline-block ${logo.className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandLogoList;
