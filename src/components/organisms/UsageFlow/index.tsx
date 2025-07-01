import GradientCircle from "@/components/atoms/GradientCircle";
import Wrapper from "@/components/atoms/Wrapper";
import Image from "next/image";
import { OffSnapHeroBlockFooter } from "../OffSnapHero";
import ContactButton from "@/components/atoms/ContactButton";

const ContentUsageFlow = [
  {
    title: <span>アカウント登録</span>,
    urlImage: "/images/png/UsageFlow-1.png",
    content: (
      <span>
        「アカウント登録」で
        <span className="font-bold text-amethystGray">今すぐ利用開始。</span>
        不明点は「お問合わせ」からお気軽にご連絡ください。
      </span>
    ),
  },
  {
    title: <span>企業・サービス情報登録</span>,
    urlImage: "/images/png/UsageFlow-2.png",
    content: (
      <span>
        企業情報やロゴを一度登録すれば、
        <span className="font-bold text-amethystGray">
          いつでも管理画面から簡単に編集・更新可能
        </span>
        。
      </span>
    ),
  },
  {
    title: <span>導入企業の連携</span>,
    urlImage: "/images/png/UsageFlow-3.png",
    content: (
      <span>
        導入企業の申請または御社の紐付け依頼を確認後、
        <span className="font-bold text-amethystGray">
          ワンクリックで両ページに情報が表示
        </span>
        されます。
      </span>
    ),
  },
  {
    title: <span>新規問い合わせ企業向け資料のアップロード</span>,
    urlImage: "/images/png/UsageFlow-4.png",
    content: (
      <span>
        OFFISNAP上で御社サービスに興味を持った企業が担当者情報を入力すると資料をDLでき、その
        <span className="font-bold text-amethystGray">
          情報はすぐに御社へ送信
        </span>
        されます。
      </span>
    ),
  },
];

const Title = () => {
  return (
    <div className="mx-auto h-[101px] flex flex-col items-center justify-center gap-2">
      <div className="font-bold text-[18px] sm:text-2xl text-amethystGray">
        <span>最短即時で利用可能</span>
      </div>
      <div className="font-bold text-xl sm:text-[40px] mt-1 sm:mt-2 md:mt-4 lg:mt-6">
        <span>ご利用の流れ</span>
      </div>
    </div>
  );
};

export interface CardItemProps {
  title: React.ReactNode;
  urlImage: string;
  content: React.ReactNode;
  isFirst?: boolean;
}

const CardItem = ({ title, urlImage, content, isFirst }: CardItemProps) => {
  return (
    <div
      className={`${
        isFirst ? "" : "border-t"
      } md:border-none border-lavender-light flex pt-2 md:pt-0`}
    >
      <div>
        {urlImage && (
          <div className="flex md:hidden w-16 h-16 rounded-full bg-lavender-light  items-center justify-center mr-4">
            <div className="relative w-8 h-8">
              <Image
                src={urlImage}
                alt=""
                className="object-contain mx-auto"
                priority
                fill
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex md:items-center justify-center flex-col font-noto">
        <div className="text-base lg:text-xl xl:text-2xl font-bold md:h-[105px] md:mt-2 md:pt-4 flex md:text-center lg:px-2">
          {title}
        </div>
        {urlImage && (
          <div className="hidden md:flex w-40 h-40 rounded-full bg-lavender-light items-center justify-center my-6">
            <Image
              src={urlImage}
              alt=""
              className="object-contain mx-auto"
              priority
              width={80}
              height={80}
            />
          </div>
        )}
        <div className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-6 mb-4">
          {content}
        </div>
      </div>
    </div>
  );
};

const Contents = () =>
  ContentUsageFlow.map((el, index) => {
    const number = String(index + 1).padStart(2, "0");
    return (
      <div
        key={index}
        className="flex items-start md:items-center justify-center md:justify-start flex-row md:flex-col md:min-h-[569px] lg:min-h-[545px] gap-2"
      >
        <div>
          <GradientCircle
            number={number}
            size="w-[30px] h-[30px] md:w-[80px] md:h-[80px]"
            textSize="text-xs md:text-2xl"
            border="p-[1px] md:p-[2px]"
          />
        </div>
        <CardItem {...el} isFirst={index === 0} />
      </div>
    );
  });

const MapFlow = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-4 items-center justify-between md:gap-4">
        <div className="absolute left-[15px] md:top-10 top-1/2 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 h-[95%] md:w-[75%] md:h-px w-px bg-amethystGray z-0" />
        <div className="absolute left-[8px] md:hidden top-[95%]  w-4 h-4 bg-gradient-to-r from-gradient-red to-gradient-purple z-20 rounded-full opacity-80" />
        <div className="absolute left-[8px] md:hidden top-[95%]  w-4 h-4 bg-white rounded-full opacity-100 z-10" />
        <Contents />
      </div>
    </>
  );
};

const UsageFlow = () => {
  return (
    <div className="w-full bg-white font-noto text-deep-black tracking-[0.05em] pb-6">
      <Wrapper>
        <Title />
        <div className="mt-6">
          <MapFlow />
        </div>
        <div className="relative h-[145px] md:h-[107px] mt-4">
          <OffSnapHeroBlockFooter isShadow={false} location="bottom-0" />
        </div>
      </Wrapper>
    </div>
  );
};

export default UsageFlow;
