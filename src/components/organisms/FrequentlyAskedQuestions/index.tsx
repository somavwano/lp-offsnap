"use client";

import Wrapper from "@/components/atoms/Wrapper";
import { listAskQuestion } from "@/constants";
import clsx from "clsx";
import { useState } from "react";

const AskQuestion = ({
  ask,
  titleQuestion,
  question,
}: {
  ask: string;
  titleQuestion: string;
  question: string;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-4 mt-2 sm:mt-4 lg:mt-6">
      <div
        onClick={() => setIsActive((prev) => !prev)}
        className="cursor-pointer text-amethystGray text-base sm:text-xl lg:text-2xl flex items-start justify-between w-full gap-2 mb-4"
      >
        <div className="lg:w-7">Q.</div>
        <div className="flex-1">{ask}</div>
        <PlusMinusIcon isActive={isActive} />
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-[max-height] duration-1000 ease-in-out",
          isActive ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="text-sm sm:text-base lg:text-xl text-deep-black flex items-start justify-start gap-2">
          <div className="font-normal lg:w-7 shrink-0">A.</div>
          <div>
            <div>{titleQuestion}</div>
            <div className="font-normal flex-1">{question}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlusMinusIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <span className="absolute block w-full h-[2px] bg-amethystGray transition-transform duration-500" />
      <span
        className={clsx(
          "absolute block h-full w-[2px] bg-amethystGray transition-transform duration-500",
          isActive ? "rotate-90" : "rotate-0"
        )}
      />
    </div>
  );
};

const ListAskQuestion = () => {
  return (
    <div>
      {listAskQuestion.map((el, index) => (
        <AskQuestion {...el} key={index} />
      ))}
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <div className="bg-white py-6 font-bold text-amethystGray font-noto">
      <Wrapper>
        <div className="h-20 text-xl sm:text-[30px] lg:text-[40px] w-full flex items-center justify-center">
          よくあるご質問
        </div>
        <ListAskQuestion />
      </Wrapper>
    </div>
  );
};

export default FrequentlyAskedQuestions;
