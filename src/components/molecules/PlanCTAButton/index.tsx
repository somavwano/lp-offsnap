import { clsx } from "clsx";

import { CTA } from "@/type/interface";

interface PlanCTAProps {
  cta: CTA;
}

const PlanCTAButton: React.FC<PlanCTAProps> = ({ cta }) => {
  return (
    <button
      className={clsx(
        "flex lg:h-14 lg:py-0 md:py-4 py-2 items-center justify-center gap-1 text-white font-bold lg:text-sm sm:text-xs text-[10px] rounded-[28px] w-full hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out cursor-pointer",
        cta.text !== "初月無料"
          ? "bg-primary"
          : " bg-[linear-gradient(135deg,_#FF555C_0%,_#844FB8_140%)]"
      )}
    >
      {cta.text === "初月無料" ? (
        <span>
          <span className="border-b-2  pb-px">{cta.text}</span>
          {cta.subText}
        </span>
      ) : (
        cta.text
      )}
      <span className="ml-2 font-light">›</span>
    </button>
  );
};

export default PlanCTAButton;
