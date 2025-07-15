"use client";

import ButtonRed from "@/app/button-red";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      id="home"
      className="p-4 md:p-8 overflow-y-hidden overflow-x-hidden flex max-w-dvw max-h-dvh flex-col items-center justify-between bg-custom-red-gradient"
    >
      <img
        src="/border.svg"
        className="absolute top-4 left-4 md:top-8 md:left-8"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] absolute top-4 right-4 md:top-8 md:right-8"
      ></img>
      <img
        src="/border.svg"
        className="scale-y-[-1] bottom-8 left-8 absolute hidden md:block"
      ></img>
      <img
        src="/border.svg"
        className="scale-x-[-1] scale-y-[-1] bottom-8 right-8 absolute hidden md:block"
      ></img>

      <img
        src="/big-way-logo.png"
        alt="Big Way Hot Pot Logo"
        className="w-10 mb-8"
      />

      <div className="text-center w-full max-w-2xl flex flex-col items-center justify-center">
        <h1 className="font-source-serif-pro font-medium uppercase text-[#FFC950] text-2xl mb-2">
          Big Way Hot Pot
        </h1>
        <h2 className="font-futura font-extrabold text-white text-5xl uppercase text-balance mb-10">
          Discover Your Soup Personality
        </h2>

        <ButtonRed
          id="start_quiz"
          label="Start the Quiz"
          onClick={() => router.push("/quiz")}
        />
      </div>

      <img
        src="/hero-image-2x.png"
        className="max-w-3xl md:max-w-7xl md:mt-10"
      />
    </main>
  );
}
