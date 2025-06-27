import Image from "next/image";
import React from "react";

const OffisBanner = () => {
  return (
    <div
      className="w-full  text-white py-4 flex sm:items-center items-start justify-center relative sm:h-[138px] h-[110px] border-y border-x-gray-amethyst"
      style={{
        background: "linear-gradient(-180deg, #FF555C 0%, #844FB8 350%)",
      }}
    >
      <div className="md:text-[32px] sm:text-2xl text-xl md:leading-[32px] font-bold flex items-end justify-center md:gap-x-4 relative z-10">
        <Image
          src={"/images/svg/img-slask-left.svg"}
          alt={"img-logo-btn"}
          width={0}
          height={27}
          className="w-[27px] h-auto sm:hidden block"
        />
        <Image
          src={"/images/svg/img-slask-left-pc.svg"}
          alt={"img-logo-btn"}
          width={0}
          height={18}
          className="w-[18px] h-auto sm:block hidden"
        />
        <div className="flex items-end flex-wrap sm:w-full sm:max-w-full max-w-[188px] justify-center">
          <Image
            src={"/images/svg/img-logo-white.svg"}
            alt={"img-logo-btn"}
            width={50}
            height={0}
            className="w-auto lg:h-[50px] md:h-[40px] h-[30px]"
          />
          <span className="sm:ml-4 ml-1">が</span>
          <span>まとめて解決します</span>
        </div>
        <Image
          src={"/images/svg/img-slask-right.svg"}
          alt={"img-logo-btn"}
          width={27}
          height={0}
          className="w-[27px] h-auto sm:hidden block"
        />
        <Image
          src={"/images/svg/img-slask-right-pc.svg"}
          alt={"img-logo-btn"}
          width={18}
          height={0}
          className="w-[18px] h-auto sm:block hidden"
        />
      </div>
      <Image
        src={"/images/svg/img-banner-right.svg"}
        alt={"img-logo-btn"}
        width={0}
        height={138}
        className="w-auto lg:h-[138px] h-[68px] absolute right-0 bottom-0 sm:object-cover object-contain  md:block hidden"
      />
      <Image
        src={"/images/svg/img-banner-right-sp.svg"}
        alt={"img-logo-btn"}
        width={0}
        height={138}
        className="w-auto lg:h-[138px] h-[68px] absolute right-0 bottom-0 sm:object-cover object-contain  block md:hidden"
      />
      <Image
        src={"/images/svg/img-banner-left-sp.svg"}
        alt={"img-logo-btn"}
        width={0}
        height={138}
        className="w-auto lg:h-[138px] h-[68px] absolute bottom-0 left-0 sm:object-cover object-contain md:hidden block"
      />
      <Image
        src={"/images/svg/img-banner-left.svg"}
        alt={"img-logo-btn"}
        width={0}
        height={68}
        className="w-auto lg:h-[138px] h-[68px] absolute bottom-0 left-0 sm:object-cover object-contain  md:block hidden"
      />
    </div>
  );
};

export default OffisBanner;
