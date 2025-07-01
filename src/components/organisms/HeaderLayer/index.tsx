import Image from 'next/image';

export default function HeaderLayer() {
  return (
    <div className="w-full lg:h-[88px] h-[178px] bg-white flex items-center text-amethystGray font-noto font-bold text-sm flex-wrap justify-center">
      <div className="max-w-[1264px] w-full h-[56px] px-4 sm:px-6 md:px-10 mx-auto flex justify-between items-center">
        <div className="w-[101px] sm:w-[204px] sm:h-10 h-5 relative flex-shrink-0">
          <Image
            src="/images/svg/logo-offisnap.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 101px, 204px"
          />
        </div>

        <div className="lg:flex gap-4 xl:gap-6">
          <button className="hidden lg:flex items-center lg:w-[267px] h-12 justify-center gap-1">
            <span className="truncate">オフィス担当者の方はこちら</span>
            <Image
              src="/images/svg/input_icon.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>

          <button className="hidden lg:flex items-center xl:w-[254px] h-12 justify-center gap-1">
            <span className="truncate">OFFISNAPサービスサイト</span>
            <Image
              src="/images/svg/input_icon.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>

          <button className="flex items-center w-[120px] xl:w-[135px] h-12 justify-center border-2 border-[#8167A7] rounded-md gap-1">
            <Image
              src="/images/svg/icon-user-header.svg"
              alt=""
              width={24}
              height={24}
            />
            <span>ログイン</span>
          </button>
        </div>
      </div>

      <div className="flex lg:hidden">
        <button className="flex items-center max-w-[171.5px] md:w-[267px] lg:h-12 h-[50px] justify-center gap-1">
          <span className="whitespace-normal">
            オフィス担当者<br />の方はこちら
          </span>
          <Image
            src="/images/svg/input_icon.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>

        <button className="flex items-center max-w-[171.5px] md:w-[254px] h-12 justify-center gap-1">
          <span className="whitespace-normal">
            OFFISNAP<br />サービスサイト
          </span>
          <Image
            src="/images/svg/input_icon.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
