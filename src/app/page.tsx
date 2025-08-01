"use client";

import ButtonRed from "@/app/button/button-red";
import { useRouter } from "next/navigation";
import ButtonGold from "./button/button-gold";

export default function Home() {
  const router = useRouter();

  return (
    <main
      id="home"
      className="p-4 md:p-8 overflow-y-hidden overflow-x-hidden flex max-w-dvw max-h-dvh flex-col items-center justify-between bg-custom-red-gradient"
    >
      <img
        src="/border.svg"
        className="absolute top-4 left-4 md:top-8 md:left-8 pointer-events-none"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] absolute top-4 right-4 md:top-8 md:right-8 pointer-events-none"
      ></img>
      <img
        src="/border.svg"
        className="scale-y-[-1] bottom-8 left-8 absolute hidden md:block pointer-events-none"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] scale-y-[-1] bottom-8 right-8 absolute hidden md:block pointer-events-none"
      ></img>

      <img
        src="/big-way-logo.png"
        alt="Big Way Hot Pot Logo"
        className="w-10 mb-8 pointer-events-none"
      />

      <div className="text-center w-full max-w-2xl flex flex-col items-center justify-center">
        <h1 className="font-source-serif-pro font-medium uppercase text-[#FFC950] text-2xl mb-2">
          Big Way Hot Pot
        </h1>
        <h2 className="font-futura font-extrabold text-white text-5xl uppercase text-balance mb-10">
          Discover Your Soup MBTI
        </h2>

        <div className="w-full flex items-center justify-center mb-6">
          <ButtonGold
            id="start_quiz"
            label="Take the Quiz"
            onClick={() => router.push("/quiz")}
          />
        </div>

        <ButtonRed
          id="view_soup_bases"
          label="View All Soup Bases"
          onClick={() => router.push("/all-soups")}
        />
      </div>

      <img
        src="/hero-image-2x.png"
        className="max-w-4xl md:max-w-6xl mt-10 md:mt-0 pointer-events-none"
      />
    </main>
  );
}
