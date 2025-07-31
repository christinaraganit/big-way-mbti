"use client";
import React from "react";
import { brothByMBTI, calculateMBTI } from "@/app/mbti";
import { useQuizContext } from "@/app/quiz-context";
import ButtonRed from "../button/button-red";
import { useRouter } from "next/navigation";
import ButtonGold from "@/app/button/button-gold";

export default function Results() {
  const router = useRouter();
  const { answers } = useQuizContext();

  const mbti = React.useMemo(() => {
    return calculateMBTI(answers);
  }, [answers]);

  return (
    <main
      id="results"
      className={
        "flex flex-col items-center justify-center min-h-dvh min-w-dvw p-4 md:p-8 overflow-x-hidden"
      }
    >
      <img
        src="/border.svg"
        className="fixed top-4 left-4 md:top-8 md:left-8"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] fixed top-4 right-4 md:top-8 md:right-8"
      ></img>
      <img
        src="/border.svg"
        className="scale-y-[-1] bottom-8 left-8 fixed hidden md:block"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] scale-y-[-1] bottom-8 right-8 fixed hidden md:block"
      ></img>

      <img
        src="/big-way-logo.png"
        alt="Big Way Hot Pot Logo"
        className="w-10 mb-8"
      />

      <div className="px-8 text-center w-full max-w-2xl flex flex-col items-center justify-center">
        <h1 className="font-source-serif-pro font-medium uppercase text-[#FFC950] text-2xl mb-2">
          {mbti}
        </h1>
        <h2 className="font-futura font-extrabold text-white text-5xl uppercase text-balance">
          {brothByMBTI[mbti].broth}
        </h2>
      </div>

      <img src={brothByMBTI[mbti].img} className="-mt-8 max-w-xl"></img>

      <div className="max-w-[350px] w-full -mt-16 mb-8">
        <h2 className="font-source-serif-pro text-[#F19C24] mb-2">
          Description
        </h2>
        <p className="font-futura text-lg text-white">
          {brothByMBTI[mbti].description}
        </p>
      </div>

      <div className="max-w-[350px] w-full mb-12">
        <h2 className="font-source-serif-pro text-[#F19C24] mb-2">
          Personality Traits
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {brothByMBTI[mbti].traits.map((trait, idx) => (
            <span key={idx} className="block font-futura text-lg text-white">
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-[20px] items-center justify-center mb-12">
        <ButtonGold
          id={"share_quiz"}
          label={"Share My Result"}
          onClick={() => {}}
        />
        <ButtonRed
          id="take_quiz_again"
          label="Take the Quiz Again"
          onClick={() => router.push("/quiz")}
        ></ButtonRed>
      </div>
    </main>
  );
}
