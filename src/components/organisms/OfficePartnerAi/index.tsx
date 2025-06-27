import Image from "next/image";

import CompanyProgress from "@/components/molecules/CompanyProgress";
import { listProgressCompany } from "@/constants";

const OfficePartnerAi = () => {
  return (
    <div className="gradient-office-partner w-full sm:py-8 py-2 px-2 sm:px-4 md:py-10 md:px-6">
      <h3 className="uppercase  md:text-[30px] text-base font-bold text-center mb-6 md:mb-10 leading-snug">
        offisnapの
        <br className="md:hidden block" />
        オフィスパートナーAIマッチングサービス
      </h3>

      <div className="flex flex-col md:flex-row items-center md:items-stretch w-full ">
        <div className="w-full xl:w-[378px] lg:w-[300px] md:w-[200px] flex flex-col h-auto md:h-[236px] bg-primary flex-shrink-0 p-2">
          <div className="text-center flex items-center justify-center flex-col text-white text-sm md:text-base h-[56px]">
            <p className="text-xs">顧客が貴社好みのオフィス写真を</p>
            <h3 className="font-bold leading-[16px]">お気に入り登録</h3>
          </div>
          <div className="bg-white w-full h-full p-1 grid grid-cols-2 gap-1 relative">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/images/png/img-office-photo-${i}.png`}
                alt={"img-office-photo"}
                width={179}
                height={82}
                className="w-full h-full object-cover"
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/png/img-favorite.png"}
                alt={"img-favorite"}
                width={98}
                height={98}
                className="w-[98px] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full md:h-full h-[72px] sm:mx-[-4px] sm:my-0 my-[-4px] relative items-center justify-center z-[-1]">
          <Image
            src={"/images/svg/img-collect-left.svg"}
            alt={"img-collect-left"}
            width={0}
            height={236}
            className="w-full h-full md:h-[236px] object-contain absolute inset-0 z-[-1] md:block hidden"
          />
          <Image
            src={"/images/svg/img-collect-left-sp.svg"}
            alt={"img-collect-left"}
            width={136.3}
            height={72}
            className="w-auto h-[72px] object-contain absolute inset-0 z-[-1] md:hidden block mx-auto"
          />
          <div className="md:w-[30px] w-[240px] md:h-[236px] h-[39px] bg-[linear-gradient(90deg,_#8167A7_0%,_#B4688B_100%)] md:rounded-[15px] rounded-[19.5px] text-wrap flex items-center justify-center text-white font-bold text-center">
            インプット
          </div>
        </div>

        <div className="w-full xl:w-[274px] lg:w-[220px] md:w-[180px] h-auto md:h-[236px] bg-pink-accent flex-shrink-0 sm:p-1 p-[2px] flex flex-col">
          <div className="h-[56px] text-center flex items-center justify-center text-white font-bold text-sm md:text-base">
            AIによるマッチング企業の選定
          </div>
          <div className="h-full bg-white flex items-center justify-center relative py-4 md:py-0">
            <Image
              src={"/images/png/img-office-ai.png"}
              alt={"img-office-ai"}
              width={144}
              height={144}
              className="w-[100px] md:w-[144px] h-auto aspect-square"
            />
          </div>
        </div>

        <div className="flex w-full md:h-full sm:h-24 h-[83.13px] sm:my-0 -my-[2px]  ml-[-2px] relative items-center justify-center z-[-1] ">
          <Image
            src={"/images/svg/img-collect-right.svg"}
            alt={"img-collect-right"}
            width={0}
            height={236}
            className="w-full h-[68px] md:h-[236px] object-contain absolute inset-0 z-[-1] md:block hidden"
          />
          <Image
            src={"/images/svg/img-collect-right-sp.svg"}
            alt={"img-collect-right-sp"}
            width={135}
            height={83.3}
            className="w-full  h-full object-contain absolute inset-0 z-[-1] md:hidden block"
          />
          <div className="md:w-[30px] w-[240px] md:h-[236px] h-[39px] bg-[linear-gradient(90deg,_#B4688B_0%,_#E6696E_100%)] md:rounded-[15px] rounded-[19.5px] text-wrap flex items-center justify-center text-white font-bold text-center">
            提案
          </div>
        </div>

        <div className="w-full xl:w-[291px] lg:w-[210px] md:w-[180px] h-auto md:h-[236px] bg-rose-accent flex-shrink-0 sm:p-1 p-[2px] flex flex-col">
          <div className="h-auto md:h-[56px] text-center flex flex-col items-center justify-center text-white font-bold text-sm md:text-base py-2 md:py-0">
            <span className="text-xs font-normal">提案された企業の中から</span>
            <span className="leading-[16px]">パートナーを決定</span>
          </div>
          <div className="bg-white h-full px-2 md:px-[13.5px] py-4 flex items-center justify-center flex-col">
            <div className="grid grid-cols-3 gap-2 items-center">
              {listProgressCompany.map((item, index) => (
                <CompanyProgress name={item.name} url={item.url} key={index} />
              ))}
            </div>
            <p className="text-xs text-rose-accent pt-2 text-center">
              パートナーに最適な企業を<span className="font-bold">厳選</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficePartnerAi;
