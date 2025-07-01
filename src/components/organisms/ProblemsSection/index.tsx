import Wrapper from "@/components/atoms/Wrapper";
import { contentCartsProblemsSection } from "@/constants";
import Image from "next/image";

const ContentCart = () => {
  return contentCartsProblemsSection.map((el, index) => (
    <div key={index} className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:w-[60px] sm:h-[60px] w-10 h-10 rounded-full bg-gray-medium flex items-center justify-center text-white text-[18px] font-bold z-10">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="w-full p-2 sm:p-4 bg-white rounded-2xl border-4 sm:mt-10 mt-6 border-gray-medium">
        <div className="h-[38px] sm:h-[105px] flex items-center justify-center text-center mt-8 sm:mt-0">
          <p className="font-bold text-base sm:text-2xl">{el.title}</p>
        </div>

        <div className="h-20 sm:h-[105px] flex my-4">
          <span className="text-sm font-normal leading-5">{el.content}</span>
        </div>

        <div>
          <Image
            src={el.urlImage}
            alt=""
            width={374}
            height={260}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  ));
};

const ProblemsSection = () => {
  return (
    <div className="w-full bg-white font-noto text-deep-black tracking-[0.05em]">
      <div className="py-6">
        <Wrapper>
          <div className="mx-auto max-w-[460px] h-12 py-6 flex items-center justify-center">
            <h3 className="font-bold text-xl text-[20px] sm:text-[32px]">
              こんな<span className="text-amethystGray underline decoration-[6%] underline-offset-[14%] text-[22px] sm:text-[40px]">お悩み</span>ありませんか？
            </h3>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mt-4 sm:mt-6">
            <ContentCart />
          </div>
        </Wrapper>
      </div>
      <div className="mx-auto max-w-[1440px]">
        <Image
          src="/images/png/problems-section-half-fill.svg"
          alt=""
          width={374}
          height={260}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ProblemsSection;
