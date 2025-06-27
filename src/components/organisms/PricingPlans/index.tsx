import { clsx } from "clsx";
import Image from "next/image";

import PlanHeader from "@/components/atoms/PlanHeader";
import PaidBannerSection from "@/components/molecules/PaidBannerSection";
import PlanCTAButton from "@/components/molecules/PlanCTAButton";
import PlanPrice from "@/components/molecules/PlanPrice";
import { featureLabels, plans } from "@/constants";

const PricingPlans: React.FC = () => {
  return (
    <div>
      <h1 className="text-[40px] leading-normal font-bold text-center text-gray-800 pb-6">
        料金プラン
      </h1>
      <div className="w-full overflow-x-auto lg:overflow-x-visible">
        <div className="flex md:min-w-[800px] ">
          {/* Feature Labels */}
          <div className="flex flex-shrink-0 xl:w-[330px] lg:w-[270px]  md:w-[200px] w-[130px] flex-col items-center mt-[39px] ">
            <div className="md:h-[91px] h-16" />
            <div className="lg:h-[230px] md:h-auto h-[117px] flex w-full items-center text-center justify-center font-semibold text-gray-700">
              月額固定費
            </div>

            {featureLabels.map((label, index) => (
              <div
                key={index}
                className={`xl:h-[71px] h-auto py-4 md:text-base text-xs flex !w-full items-center text-center justify-center font-semibold text-gray-700 whitespace-pre-line leading-snug ${
                  index % 2 !== 0 ? "bg-gray-lightest" : ""
                }`}
              >
                <div>
                  {label}
                  {index === 3 && (
                    <a
                      href="#"
                      className="block text-blue-600 text-sm underline mt-1"
                    >
                      ※AIマッチングサービスとは
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Plan Columns */}
          <div className="flex-1 lg:grid flex grid-cols-3 gap-y-8 md:gap-y-0 gap-x-[1px]">
            {plans.map((plan, planIndex) => (
              <div
                key={plan.name}
                className={clsx(
                  "relative lg:w-full md:w-[250px] sm:w-[200px] w-[162px] col-span-1 flex-shrink-0",
                  plan.recommended
                    ? "px-[1px] mb-[14px] border-2 border-rose-accent  pt-[38px]"
                    : "mt-[39px]"
                )}
              >
                {plan.recommended && (
                  <div
                    className={clsx(
                      " w-full text-center absolute top-1 left-1/2 -translate-x-1/2 bg-white px-4 py-1  !text-base leading-[180%]",
                      "  text-rose-accent font-bold z-10"
                    )}
                  >
                    ＼ おすすめ ／
                  </div>
                )}
                <div
                  className={
                    plan.recommended
                      ? "h-full flex flex-col"
                      : "flex flex-col h-full"
                  }
                >
                  <PlanHeader name={plan.name} recommended={plan.recommended} />

                  <div
                    className={clsx(
                      "flex flex-col items-center justify-end  md:p-6 p-2",
                      plan.recommended
                        ? "lg:h-[214px] sm:h-auto h-[109px]"
                        : "lg:h-[230px] md:h-auto h-[117px]"
                    )}
                  >
                    <PlanPrice price={plan.price} priceNote={plan.priceNote} />
                    <PlanCTAButton cta={plan.cta} />
                  </div>

                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`xl:h-[71px] h-auto py-4 flex flex-col justify-center items-center text-center text-deep-black text-lg font-bold ${
                        featureIndex % 2 !== 0 ? "bg-gray-lightest" : ""
                      }`}
                    >
                      {feature.text === "○" ? (
                        <>
                          <Image
                            src={"/images/png/icon-circle.png"}
                            alt="check"
                            width={24}
                            height={24}
                          />

                          {feature?.subText && (
                            <p className="text-center text-xs ">
                              {feature?.subText}
                            </p>
                          )}
                        </>
                      ) : (
                        feature.text
                      )}
                      {featureIndex === 3 &&
                        planIndex === 0 &&
                        feature?.link && (
                          <a
                            href={feature.link.href}
                            className="block text-blue-600 text-sm underline mt-1"
                          >
                            {feature.link.text}
                          </a>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PaidBannerSection />
    </div>
  );
};

export default PricingPlans;
