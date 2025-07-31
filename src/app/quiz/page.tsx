"use client";
import React from "react";
import { mbti } from "@/app/mbti";
import ButtonGreen from "@/app/button/button-green";
import { useQuizContext } from "@/app/quiz-context";
import { useRouter } from "next/navigation";

const stepImages: Record<number, string> = {
  0: "/illustrations/illustration-1-2x.png",
  1: "/illustrations/illustration-2-2x.png",
  2: "/illustrations/illustration-3-2x.png",
  3: "/illustrations/illustration-4-2x.png",
  4: "/illustrations/illustration-5-2x.png",
  5: "/illustrations/illustration-6-2x.png",
  6: "/illustrations/illustration-7-2x.png",
  7: "/illustrations/illustration-8-2x.png",
  8: "/illustrations/illustration-9-2x.png",
  9: "/illustrations/illustration-10-2x.png",
  10: "/illustrations/illustration-11-2x.png",
  11: "/illustrations/illustration-12-2x.png",
};

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const { setAnswers } = useQuizContext();

  return (
    <div
      id="quiz"
      className={
        "flex flex-col items-center justify-between w-dvw h-dvh max-w-dvw max-h-dvh overflow-hidden pt-4 p-8 md:p-8 gap-4 bg-white"
      }
    >
      <img
        src="/golden-border.svg"
        className="absolute top-4 left-4 md:top-8 md:left-8 pointer-events-none"
      ></img>
      <img
        src="/golden-border.svg"
        className="scale-x-[-1] absolute top-4 right-4 md:top-8 md:right-8 pointer-events-none"
      ></img>
      <img
        src="/golden-border.svg"
        className="scale-y-[-1] bottom-8 left-8 absolute hidden md:block pointer-events-none"
      ></img>
      <img
        src="/golden-border.svg"
        className="scale-x-[-1] scale-y-[-1] bottom-8 right-8 absolute hidden md:block pointer-events-none"
      ></img>

      <div className="w-full flex items-center flex-col">
        <img src="/red-flower.svg" className="w-5 mb-2 pointer-events-none" />
        <span className="font-source-serif-pro uppercase text-sm md:text-base font-medium text-[#6B1C3D] block mb-6">
          Question {step + 1}/12
        </span>

        <h1 className="font-mona-sans text-xl md:text-2xl text-[#601616] font-medium mb-10 text-balance max-w-xl text-center">
          {mbti[step]?.question}
        </h1>
      </div>

      <div className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden">
        <img
          src={stepImages[step]}
          className="max-w-xl md:w-full max-h-[480px] object-contain pointer-events-none"
        />
      </div>

      <div className="w-full flex items-center flex-col gap-5 mb-4">
        <ButtonGreen
          id={`A${step}`}
          onClick={() => {
            if (step === mbti.length - 1) {
              router.push("/results");
              return;
            }
            const currentAnswer = mbti[step]?.answerA.letter;
            if (currentAnswer) {
              setAnswers((prev) => {
                const newCount = (prev.get(currentAnswer) || 0) + 1;
                return new Map(prev).set(currentAnswer, newCount);
              });
            }
            setStep((prev) => prev + 1);
          }}
          label={`${mbti[step]?.answerA.text}`}
        />

        <ButtonGreen
          id={`B${step}`}
          onClick={() => {
            if (step === mbti.length - 1) {
              router.push("/results");
              return;
            }
            const currentAnswer = mbti[step]?.answerB.letter;
            if (currentAnswer) {
              setAnswers((prev) => {
                const newCount = (prev.get(currentAnswer) || 0) + 1;
                return new Map(prev).set(currentAnswer, newCount);
              });
            }
            setStep((prev) => prev + 1);
          }}
          label={`${mbti[step]?.answerB.text}`}
        />
      </div>
    </div>
  );
}
