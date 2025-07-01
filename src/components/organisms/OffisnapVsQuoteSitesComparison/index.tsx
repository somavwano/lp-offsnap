import { clsx } from "clsx";
import Image from "next/image";

import { columnsOffisnapVsQuoteSitesComparison } from "@/constants";

import { OffSnapHeroBlockFooter } from "../OffSnapHero";

import Wrapper from "./../../atoms/Wrapper/index";

const Title = () => {
  return (
    <div className="font-bold text-xl md:text-[40px] flex flex-col items-center justify-center text-center gap-1 md:gap-4">
      <div className="mx-auto flex items-center justify-center h-[29px] md:h-[50px]">
        <div className="relative md:w-[254px] md:h-[50px] h-6 w-[122px]">
          <Image
            src="/images/svg/logo-offisnap.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="hidden lg:block">
          <span>と一括見積もりサイトとの比較</span>
        </div>
        <div className="block lg:hidden">
          <span>と</span>
        </div>
      </div>
      <div className="block lg:hidden">一括見積もりサイトとの比較</div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="grid grid-cols-[65fr_141fr_141fr] w-full font-noto font-bold text-deep-black">
      {columnsOffisnapVsQuoteSitesComparison.map((col, colIndex) => (
        <div
          key={`col-${colIndex}`}
          className={clsx(
            "flex flex-col items-center justify-start",
            col.border
          )}
        >
          {/* Header */}
          <div
            className={clsx(
              "w-full text-center text-2xl h-[91px] flex items-center justify-center",
              col.header?.isRed
                ? "bg-rose-accent border-2 border-rose-accent text-white"
                : "",
              col.header?.isGray
                ? "bg-gray-dark-muted text-base text-white"
                : "",
              !col.header?.isGray && !col.header?.isRed ? "bg-white" : ""
            )}
          >
            {col.header?.text ?? ""}
          </div>

          {/* Content rows */}
          {col.items.map((item, rowIndex) => (
            <div
              key={`col-${colIndex}-row-${rowIndex}`}
              className={clsx(
                "w-full h-[151px] sm:h-[140px] lg:h-[145px] xl:h-[172px] text-base flex items-center justify-center text-center"
              )}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const OffisnapVsQuoteSitesComparison = () => {
  return (
    <div className="bg-white">
      <Wrapper>
        <div className="py-6">
          <Title />
        </div>
        <Table />
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

export default OffisnapVsQuoteSitesComparison;
