import Wrapper from "@/components/atoms/Wrapper";
import { contentCartsWhyChooseSection } from "@/constants";
import Image from "next/image";

const Title = () => {
  return (
    <div className="mx-auto h-14 py-6 flex items-center justify-center gap-2">
      <div className="relative sm:w-[254px] sm:h-[50px] h-6 w-[122px]">
        <Image
          src="/images/svg/logo-offisnap.svg"
          alt="Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 101px, 204px"
        />
      </div>
      <div className="font-bold text-xl sm:text-[32px]">
        <span>
          が選ばれる
          <span className="text-amethystGray">
            <span className="text-2xl sm:text-[40px]">3</span>つの理由
          </span>
        </span>
      </div>
    </div>
  );
};

const ContentCart = () => {
  return contentCartsWhyChooseSection.map((el, index) => (
    <div key={index} className="relative font-bold p-4 sm:min-h-[602px] md:min-h-[640px] lg:min-h-[700px] bg-white rounded-lg">
      <div className="max-w-[405px] mx-auto">
        <div className="flex text-center justify-center">
          <span className="inline-block px-4 py-1 w-[97px] h-[26px] border border-amethystGray text-amethystGray rounded-full text-amethyst text-xs font-bold">
            Point {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <Image
            src={el.urlImage}
            alt=""
            width={300}
            height={300}
            className="w-[300px] max-h-[300px] h-auto"
          />
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl sm:mt-6 mt-6">
        <div className="flex items-center justify-center text-center mt-8 sm:mt-0">
          <p className="font-bold text-base sm:text-[22px] text-amethystGray">{el.title}</p>
        </div>

        <div className="flex my-4">
          <span className="text-sm md:text-[16px] lg:text-[18px] font-bold leading-5"> {el.content} </span>
        </div>
      </div>
    </div>
  ));
};

const WhyChooseSection = () => {
  return (
    <div className="w-full bg-[#EDE9F2] sm:bg-white font-noto text-deep-black tracking-[0.05em]">
      <div className="py-6">
        <Wrapper>
          <Title />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-2 sm:gap-6 items-center justify-center mt-4 sm:mt-6">
            <ContentCart />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default WhyChooseSection;
