import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

import ContactButton from "@/components/atoms/ContactButton";
import Wrapper from "@/components/atoms/Wrapper";
const listOfficeMerit = [
  {
    title: "オフィス担当者登録数",
    description: "日本最大級",
    img: "/images/svg/img-staff-count.svg",
  },
  {
    title: "面倒な導入事例掲載も",
    description: "簡単公開",
    img: "/images/svg/img-staff-count.svg",
  },
  {
    title: "最適な顧客との出会い",
    description: "AIマッチング",
    img: "/images/svg/img-staff-count.svg",
  },
];

const OfficeMeritItems = ({
  title,
  description,
  img,
  index,
}: {
  title: string;
  description: string;
  img: string;
  index: number;
}) => {
  return (
    <div
      className={clsx(index == 0 ? "md:col-span-1 col-span-2" : "col-span-1")}
    >
      <div
        className={clsx(
          "flex items-center sm:gap-2 gap-[2px]",
          index == 0 && "justify-center",
          index == 1 && "justify-end"
        )}
      >
        <Image
          src={"/images/svg/img-merit-left.svg"}
          alt={"img-logo-btn"}
          width={0}
          height={82}
          className="sm:w-auto sm:h-full w-[16px] h-[41px]"
        />
        <div className="flex flex-col items-center text-white">
          <div className="lg:text-base md:text-sm text-xs">{title}</div>
          <div className="lg:text-[32px] md:text-2xl text-lg sm:leading-normal leading-[22px] font-bold">
            {description}
          </div>
          <Image
            src={img}
            alt={"img-staff-count"}
            width={0}
            height={24}
            className="w-auto sm:mt-2 mt-[2px] sm:h-6 !h-4"
          />
        </div>
        <Image
          src={"/images/svg/img-merit-right.svg"}
          alt={"img-logo-btn"}
          width={0}
          height={82}
          className="sm:w-auto sm:h-full w-[16px] h-[41px]"
        />
      </div>
    </div>
  );
};

type OffSnapHeroBlockFooterProps = {
  isShadow?: boolean;
  location?: string;
  isText?: boolean;
};

export const OffSnapHeroBlockFooter = ({ isShadow = true, location = "bottom-[-25px]", isText= true }: OffSnapHeroBlockFooterProps) => {
  return (
    <div className={`sm:absolute left-0 right-0 ${location} flex items-center sm:flex-row flex-col justify-center md:px-0 px-4`}>
      <div className={clsx(
          "text-primary text-xs text-left sm:hidden block font-bold w-full pl-[37px]",
          isShadow? "text-left mb-2": "text-center",
          isText? "block": "hidden",
        )}
      >
        \ 今すぐ簡単！/
      </div>
      <div
        className={clsx(
          "md:w-[700px] w-full rounded-[52px] md:px-10 sm:px-6 px-4 sm:py-4 py-2",
          "md:gap-x-10 sm:gap-x-6 gap-x-2 font-bold text-sm",
          "md:pt-[16px] pt-2",
          "md:h-[104px] h-auto",
          isShadow? " bg-white shadow-xl flex items-end justify-between": "sm:flex sm:items-end",
        )}
      >
        <div className="flex-1 sm:block hidden">
          <p className={clsx(
          "text-primary text-xs text-center mb-2",
          isText? "block": "hidden",
        )}>
            \ 今すぐ簡単！ /
          </p>
          <button className="h-[49px] text-white  bg-primary rounded-[24.5px] w-full">
            今すぐお試しで掲載してみる(無料)
          </button>
        </div>
        <div className="flex-1 sm:hidden block">
          <button className="h-[49px] text-white  bg-primary rounded-[24.5px] w-full">
            今すぐ掲載(無料)
          </button>
        </div>
        <div className={clsx(
          "flex-1",
          isShadow? "": "mt-2",
        )}>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

const OffSnapHero = () => {
  return (
    <div className="relative off-snap-hero  h-auto  sm:pb-0 pb-3 sm:pt-0">
      <div className="w-full relative xl:pt-[156px] sm:pt-[100px] pt-6  xl:h-[800px] h-auto overflow-hidden xl:pb-[157px] lg:pb-[100px] sm:pb-[100px] ">
        <Image
          src={"/images/svg/img-top-home.svg"}
          alt={"img-top-home"}
          width={0}
          height={800}
          className="w-auto aspect-[1045/800] xl:h-[800px] h-full absolute left-0 top-0 z-[-1] sm:block hidden "
        />
        <Image
          src={"/images/png/img-top-home-sm.png"}
          alt={"img-top-home"}
          width={375}
          height={454}
          className="h-[454px] w-full absolute left-0 top-0 z-[-1] sm:hidden block object-cover"
        />
        <Wrapper style="relative">
          <div className="flex gap-x-[52px] flex-shrink-0 flex-wrap">
            <div className="md:w-[552px] flex-shrink-0 w-full">
              <div className="relative sm:mb-2 mb-[10px]">
                <button className="md:w-[228px] w-[188px] md:h-[38px] h-[25px] bg-white text-primary md:text-lg text-sm font-bold rounded">
                  オフィス事業者様向け
                </button>
                <Image
                  src={"/images/svg/img-border-btn.svg"}
                  alt={"img-border-btn"}
                  width={0}
                  height={56.89}
                  className="md:w-auto w-[193px] aspect-[233.5/56.89] absolute md:left-[-6px] left-[-3px] object-contain -top-[2px] md:block hidden"
                />
                <Image
                  src={"/images/svg/img-border-btn-sm.svg"}
                  alt={"img-border-btn"}
                  width={193}
                  height={40.5}
                  className="md:w-auto w-[193px] h-[40.5] absolute md:left-[-6px] left-[-3px] object-cover -top-[6px] md:hidden block"
                />
              </div>
              <h2 className="lg:text-[32px] text-lg sm:leading-[32px] md:text-left text-center md:text-xl  leading-[32px] md:leading-[48px]  lg:leading-[64px] font-bold text-white xl:h-[192px] xl:pb-0 md:pb-4">
                導入事例を使って
                <br className="md:block hidden" />
                オフィス担当者に
              </h2>
              <h2 className="md:hidden block  text-white font-bold text-center text-lg">
                <span className="text-[22px] leading-[30px]">ダイレクト</span>に
                <span className="text-[22px] leading-[30px]">訴求</span>するなら
              </h2>
              <div className="flex items-center gap-x-6 md:mt-0 mt-6 xl:mb-[72px] md:mb-10 md:justify-start justify-center">
                <Image
                  src={"/images/svg/img-logo-white.svg"}
                  alt={"img-logo-btn"}
                  width={0}
                  height={60}
                  className="w-auto lg:h-[60px] md:h-[40px] h-[30px]"
                />
                <h3 className="lg:text-[40px] md:text-2xl text-xl  sm:text lg:leading-[80px] font-bold text-white">
                  におまかせ
                </h3>
              </div>
            </div>
            <div className="relative flex-shrink-0 xl:mx-0 mx-auto pt-[14px] md:block hidden">
              <p className="text-xs text-white mb-[7px] pl-[64px] md:block hidden">
                ※画像はイメージです。
              </p>
              <div className="relative lg:block hidden">
                <Image
                  src={"/images/svg/img-laptop.svg"}
                  alt={"img-device"}
                  width={0}
                  height={317}
                  className="lg:w-[564px] sm:w-full w-[60%] aspect-[564/317] md:pr-0 sm:pr-20"
                />
                <Image
                  src={"/images/png/img-iphone.png"}
                  alt={"img-device"}
                  width={347}
                  height={288.68}
                  className="w-[347px] aspect-[347/288.68] absolute -bottom-[53.5px] -right-[142.08px]"
                />
              </div>
              <Image
                src={"/images/png/img-device.png"}
                alt={"img-device"}
                width={706}
                height={0}
                className="h-auto lg:hidden md:block hidden sm:max-w-[706px] mx-auto aspect-[706/370] md:pr-0 sm:pr-20 object-contain"
              />

              <div className="absolute -bottom-[222px] -right-[190px] z-[-3] lg:block hidden">
                <Image
                  src={"/images/png/img-circle.png"}
                  alt={"img-device"}
                  width={256}
                  height={256}
                  className="w-[256px] aspect-[1] "
                />
              </div>
              <Image
                src={"/images/png/img-shape-circle.png"}
                alt={"img-device"}
                width={520}
                height={520}
                className="!w-[520px]  h-auto !aspect-[1] absolute z-[-2] -right-[332px] -bottom-[592px] xl:block hidden"
              />
            </div>
          </div>
          <div className="md:flex grid grid-cols-2  md:gap-x-6 sm:gap-x-3 gap-x-1 sm:gap-y-3 gap-y-2  xl:mt-0 md:mt-14 mt-6 xl:justify-start justify-center">
            {listOfficeMerit.map((item, index) => (
              <OfficeMeritItems
                key={item.title}
                index={index}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="md:hidden block">
            <p className="text-center text-white text-xs mb-[-2px] mt-[29px]">
              ※画像はイメージです。
            </p>
            <Image
              src={"/images/png/img-device-top-sm.png"}
              alt={"img-device"}
              width={354}
              height={177.34}
              className="h-auto w-[354px] aspect-[354/177.34] mx-auto  object-contain"
            />
          </div>
        </Wrapper>
      </div>
      <OffSnapHeroBlockFooter />
      <div className="absolute -bottom-[95px] right-[5px] z-[-3] sm:hidden block">
        <Image
          src={"/images/png/img-circle.png"}
          alt={"img-device"}
          width={256}
          height={256}
          className="w-[256px] aspect-[1] "
        />
      </div>
    </div>
  );
};

export default OffSnapHero;
