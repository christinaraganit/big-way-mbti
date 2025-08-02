"use client";
import React from "react";
import ButtonRed from "../button/button-red";
import { useRouter } from "next/navigation";
import ButtonGold from "@/app/button/button-gold";
import HotpotImage from "@/app/hotpot-image";
import shareResults from "@/app/share-results";

export default function Results() {
  const router = useRouter();

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

      <HotpotImage  />

      <div className="w-full flex flex-col gap-[20px] items-center justify-center mb-12">
        <ButtonGold
          id={"share_quiz"}
          label={"Share My Result"}
          onClick={() => shareResults()}
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
