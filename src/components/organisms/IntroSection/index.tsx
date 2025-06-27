import Image from "next/image";

import ContactButton from "@/components/atoms/ContactButton";
import IntroSectionWrapper from "@/components/atoms/IntroSectionWrapper";
import TitleIntro from "@/components/atoms/TitleIntro";
import TryNowButton from "@/components/atoms/TryNowButton";
import Wrapper from "@/components/atoms/Wrapper";

const IntroSection = () => {
  return (
    <div className="w-full bg-white leading-[normal] tracking-[0.06em] py-6">
      <Wrapper>
        <div className="md:mb-6 mb-4">
          <TitleIntro />
        </div>
        <IntroSectionWrapper>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <div className="flex-1 font-noto flex flex-col gap-10 break-words min-w[]">
              <div>
                <span className="text-[18px] md:text-[32px] font-bold text-amethystGray">
                  OFFISNAPは <br></br>
                  <span className="underline decoration-solid decoration-[8%] underline-offset-[16%]">
                    オフィス環境への投資に積極的な企業のオフィス担当者が多く集まるプラットフォームです。
                  </span>
                </span>
              </div>
              <div className="text-[14px] md:text-2xl font-normal text-deep-black">
                <p>
                  採用強化のためにオフィス環境を発信する企業が増えており、OFFISNAPには最新の事例が次々と集まっています。その情報をチェックするため、オフィス担当者や経営層も日々アクセス。
                </p>
                <br></br>
                <br></br>
                <p>
                  さらに、オフィスを手がけた事業者も紹介されるため、
                  <span className="font-bold text-amethystGray">
                    新たな案件獲得のチャンス
                  </span>
                  も広がります。
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src="/images/svg/map-offisnap-home.svg"
                alt="Map OFFISNAP"
                width={422}
                height={385}
                className="w-full h-auto"
              />
            </div>
          </div>
        </IntroSectionWrapper>
        <div className="flex flex-wrap max-w-[806px] h-[152px] md:h-[52px] mx-auto md:gap-10 gap-6 items-center justify-center md:mt-6 mt-4 text-white font-bold text-sm">
          <div className="w-[290px]">
            <TryNowButton height="h-[52px]" />
          </div>
          <div className="w-[290px] text-amethystGray font-bold text-sm">
            <ContactButton height="h-[52px]" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default IntroSection;
