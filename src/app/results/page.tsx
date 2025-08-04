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
        "flex flex-col md:flex-row-reverse items-center justify-center md:max-h-dvh max-w-dvw md:h-screen p-4 md:p-8 md:gap-12 lg:gap-20 overflow-x-hidden"
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

      <div className="md:w-[500px] flex flex-col gap-8 items-center justify-center">


        <img
        src="/big-way-logo.png"
        alt="Big Way Hot Pot Logo"
        className="w-10 md:hidden pointer-events-none"
      />

        <div className="">
        <h2 className="font-source-serif-pro text-[#FFC950] text-xl text-center mb-0.5">You are an...</h2>
        <h1 className="font-futura font-extrabold text-[#FFF1D3] text-4xl text-center">{mbti}</h1>
        </div>
        
        <div>
        <h2 className="font-source-serif-pro text-[#FFC950] text-xl text-center mb-0.5">Your soup base is...</h2>
        <h1 className="font-futura font-extrabold text-[#FFF1D3] text-4xl text-center text-balance">{broth.broth.toUpperCase()}</h1>
        </div>
        
        <p className="font-futura text-[#FFF4E2] text-center text-md text-balance">Hold down on the image <span className="md:hidden">below</span> and save it to your
          camera roll! Share it on your favourite social media and tag @bigwayhotpot.</p>

        
        <div className="w-full justify-center hidden md:flex">  <ButtonRed
          id="take_quiz_again"
          label="Take the Quiz Again"
          onClick={() => router.push("/quiz")}
        ></ButtonRed></div>
      
      </div>

     <div className="md:hidden w-full px-3 my-12">
                <div className="separator h-0.5 mb-2 w-full"></div>
                <div className="separator h-0.5 w-full"></div>
              </div>
              

      <img
        src={`/mbti/${mbti}.png`}
        alt={mbti}
        className={"object-contain md:h-[90%] max-w-[400px]"}
      />

        <div className="md:hidden w-full px-3 my-12">
                <div className="separator h-0.5 mb-2 w-full"></div>
                <div className="separator h-0.5 w-full"></div>
              </div>

                <div className="w-full flex justify-center md:hidden mb-4">  <ButtonRed
          id="take_quiz_again2"
          label="Take the Quiz Again"
          onClick={() => router.push("/quiz")}
        ></ButtonRed></div>
    </main>
  );
}
