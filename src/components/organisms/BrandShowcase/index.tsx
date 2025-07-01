import { clsx } from "clsx";
import Image from "next/image";

import Wrapper from "@/components/atoms/Wrapper";
import { logos } from "@/constants";

import { OffSnapHeroBlockFooter } from "../OffSnapHero";
const LogoAchievements = () => {
  return (
    <div className="font-bold text-amethystGray leading-none hidden-under-340">
      <div className="flex items-center justify-center gap-2 h-full">
        <div className="relative lg:w-[53px] lg:h-[136px] w-[34px] h-[99px]">
          <Image
            src="/images/png/Achievements-2.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 lg:gap-5">
            <div className="w-[100px] lg:w-[141px] h-[2px] bg-amethystGray"></div>
            <div className="w-[34px] h-[30px] lg:w-12 lg:h-[42px]">
              <Image
                src="/images/png/Achievements-1.png"
                alt=""
                className="object-contain mx-auto"
                priority
                width={80}
                height={80}
              />
            </div>
            <div className="w-[100px] lg:w-[141px] h-[2px] bg-amethystGray"></div>
          </div>
          <div className="flex items-center justify-center -mt-2">
            <div className="flex flex-col items-center justify-center text-center">
              <div>
                <span className="lg:text-[32px] text-xl">過去掲載</span>
              </div>
              <div className="">
                <span className="lg:text-7xl text-[40px]">実績</span>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <span className="lg:text-[100px] text-[80px]">500</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div>
                <span className="lg:text-[40px] text-2xl">社</span>
              </div>
              <div className="">
                <span className="lg:text-2xl text-xs">以上</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[53px] lg:h-[136px] w-[34px] h-[99px]">
          <Image
            src="/images/png/Achievements-3.png"
            alt=""
            className="object-contain"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

const ListLogo = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full bg-white h-full items-center">
      {logos.map((logo, index) => (
        <div key={index} className={clsx("relative", "w-auto h-[42px]")}>
          <Image
            src={logo.src}
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      ))}
    </div>
  );
};

const BrandShowcase = () => {
  return (
    <div className="w-full bg-white text-deep-black md:py-6 py-4 font-noto tracking-normal">
      <Wrapper>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="text-center">
            <span className="font-bold text-xl sm:text-3xl lg:text-[40px] text-wrap sm:text-nowrap">
              選ぶならオフィス環境ポータルサイト
            </span>
          </div>
          <div>
            <div className="relative w-[122px] h-6 sm:w-44 sm:h-10 lg:w-[254px] lg:h-[50px]">
              <Image
                src="/images/svg/logo-offisnap.svg"
                alt="OFFISNAP logo"
                className="object-contain"
                priority
                fill
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 text-center">
          <span className="font-normal lg:text-3xl text-[18px] md:text-2xl sm:text-xl">
            OFFISNAPにオフィス掲載する企業増えています
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:gap-6 sm:gap-8 gap-4 mt-6">
          <LogoAchievements />
          <ListLogo />
        </div>
        <div className="relative h-[145px] md:h-[107px] mt-6">
          <OffSnapHeroBlockFooter
            isShadow={false}
            location="bottom-0"
            isText={false}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default BrandShowcase;
