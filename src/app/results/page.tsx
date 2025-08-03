"use client";
import React from "react";
import ButtonRed from "../button/button-red";
import { useRouter } from "next/navigation";
import {useQuizContext} from "@/app/quiz-context";
import {brothByMBTI, calculateMBTI} from "@/app/mbti";

export default function Results() {
  const router = useRouter();

  const { answers } = useQuizContext();

  const mbti = React.useMemo(() => calculateMBTI(answers), [answers]);
  const broth = brothByMBTI[mbti];

  return (
    <main
      id="results"
      className={
        "flex flex-col md:flex-row-reverse items-center justify-center md:max-h-dvh max-w-dvw md:h-screen p-[50px] md:p-8 gap-[35px] overflow-x-hidden"
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

      <div className="md:w-[500px] flex flex-col gap-[20px] items-center justify-center">
        <h2 className="font-source-serif-pro text-[#FFC950] text-2xl text-center">You are an...</h2>
        <h1 className="font-futura font-extrabold text-[#FFF1D3] text-4xl text-center">{mbti}</h1>
        <h2 className="font-source-serif-pro text-[#FFC950] text-2xl text-center">Your soup base is...</h2>
        <h1 className="font-futura font-extrabold text-[#FFF1D3] text-4xl text-center">{broth.broth.toUpperCase()}</h1>
        <p className="font-futura text-[#FFF4E2] text-center mb-[40px]">Hold down on the image below and save it to your
          camera roll! Share it on your favourite social media and tag @bigwayhotpot.</p>
        <ButtonRed
          id="take_quiz_again"
          label="Take the Quiz Again"
          onClick={() => router.push("/quiz")}
        ></ButtonRed>
      </div>

      <img
        src={`/mbti/${mbti}.png`}
        alt={mbti}
        className={"object-contain md:h-[90%]"}
      />
    </main>
  );
}
