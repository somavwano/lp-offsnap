import Image from "next/image";
const TitleIntro = () => {
  return (
    <div className="flex items-center mx-auto justify-center gap-2">
      <div className="relative w-[122px] h-[24px] sm:w-[254px] sm:h-[50px]">
        <Image
          src="/images/svg/logo-offisnap.svg"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 101px, 204px"
          className="object-contain"
        />
      </div>
      <div className=" text-amethystGray font-noto font-bold text-xl sm:text-[40px]">
        <span>とは？</span>
      </div>
    </div>
  );
};

export default TitleIntro