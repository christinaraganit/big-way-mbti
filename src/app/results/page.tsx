"use client";
import React from "react";
import { calculateMBTI, calculateMBTIPercentages } from "@/app/questions";
import { useQuizContext } from "@/app/quiz-context";
import ButtonRed from "../button-red";
import { useRouter } from "next/navigation";
import { MBTI } from "@/app/questions";

type BrothInfo = {
  img: string;
  broth: string;
  description: string;
  traits: string[];
};

const brothByMBTI: Record<string, BrothInfo> = {
  ENTJ: {
    img: "/broths/TomatoSpicySzechuanDryMix.png",
    broth: "Spicy Szechuan Dry Mix",
    description:
      "As a natural leader, you are bold and strong-willed to your core. You’re ready to take on any challenge that comes your way, from mild to Big Way hot!",
    traits: [
      "Charismatic",
      "Determined",
      "Confident",
      "Imaginative",
      "Intellectual",
      "Strategic",
    ],
  },
  INTJ: {
    img: "/broths/MisoBroth.png",
    broth: "Miso Broth",
    description:
      "You are a deep-thinking intellectual who really enjoys reflection and planning. Your thirst for knowledge and hunger for wisdom are never quite satisfied!",

    traits: [
      "Strategic",
      "Logical",
      "Inquisitive",
      "Imaginative",
      "Creative",
      "Curious",
    ],
  },
  ESTP: {
    img: "/broths/SignatureMaLaTang.png",
    broth: "Signature Ma La Tang",
    description:
      "You are a thrill-seeker who loves taking risks and thrives on adventure. Always ready to go with the flow, you’re an absolute classic just like this broth.",

    traits: [
      "Strategic",
      "Logical",
      "Inquisitive",
      "Imaginative",
      "Creative",
      "Curious",
    ],
  },
  ESFP: {
    img: "/broths/MushroomVeganBroth.png",
    broth: "Mushroom Vegan Broth",
    description:
      "You are a curious adventurer who thrives on variety. You're always excited to try something new as your tastes change with the seasons.",

    traits: [
      "Energetic",
      "Bold",
      "Brave",
      "Competitive",
      "Perceptive",
      "Savvy",
    ],
  },
  ENFP: {
    img: "/broths/TomYumBroth.png",
    broth: "Tom Yum Broth",
    description:
      "You are a free-spirited individual who’s always up for an adventure, whether that’s trying a new broth flavour or exploring an unfamiliar culture.",

    traits: [
      "Enthusiastic",
      "Sociable",
      "Outgoing",
      "Creative",
      "Optimistic",
      "Imaginative",
    ],
  },
  ISFJ: {
    img: "/broths/CollagenBoneBroth.png",
    broth: "Collagen Bone Broth",
    description:
      "You are a kind-hearted caregiver who enjoys routine. You’re always supporting those around you, strengthening others like the mighty Collagen Bone Broth!",

    traits: [
      "Analytical",
      "Responsible",
      "Dedicated",
      "Protective",
      "Hardworking",
      "Humble",
    ],
  },
  ISTP: {
    img: "/broths/SeasonalBroth.png",
    broth: "Seasonal Broth",
    description:
      "You are a curious adventurer who thrives on variety. You’re always excited to try something new as your tastes change with the seasons.",

    traits: [
      "Innovative",
      "Observant",
      "Decisive",
      "Practical",
      "Creative",
      "Authentic",
    ],
  },
  ENTP: {
    img: "/broths/SchezuanGreenPepperBroth.png",
    broth: "Schezuan Green Pepper Broth",
    description:
      "You are a fearless daredevil who loves pushing boundaries and trying new things. Your spicy side can show as you challenge the status quo and seek novelty.",

    traits: [
      "Witty",
      "Contrarian",
      "Adventurous",
      "Curious",
      "Flexible",
      "Rebellious",
    ],
  },
  INFJ: {
    img: "/broths/TomatoSpicySzechuanDryMix.png",
    broth: "Tomato Spicy Szechuan Dry Mix",
    description:
      "You are a passionate artist, pushing your creativity and following your heart. You stand by your morals and make the world a better place one ingredient at a time.",

    traits: [
      "Idealistic",
      "Ambitious",
      "Compassionate",
      "Principled",
      "Selfless",
      "Knowledgeable",
    ],
  },
  ISFP: {
    img: "/broths/SaChaBroth.png",
    broth: "Sa Cha Broth",
    description:
      "You are a traditionalist who values family, heritage, and simplicity. You’re capable of finding beauty in everything, indulging in the rich flavours of life.",

    traits: [
      "Adventurous",
      "Spontaneous",
      "Independent",
      "Sensitive",
      "Empathetic",
      "Adaptable",
    ],
  },
  INFP: {
    img: "/broths/TomatoBroth.png",
    broth: "Tomato Broth",
    description:
      "You are a gentle, nostalgic individual who values peace and creativity. You have a warm, calming presence, like a bowl of broth on a chilly day.",

    traits: [
      "Sentimental",
      "Kind",
      "Daydreamer",
      "Passionate",
      "Dutiful",
      "Empathetic",
    ],
  },
  ENFJ: {
    img: "/broths/TomatoVeganBroth.png",
    broth: "Tomato Vegan Broth",
    description:
      "You are a strong-willed optimist who’s always uplifting others. You’re well-rounded, maintaining balance in your life for the perfect flavour profile.",

    traits: [
      "Positive",
      "Authentic",
      "Thoughtful",
      "Selfless",
      "Idealistic",
      "Charismatic",
    ],
  },
  ISTJ: {
    img: "/broths/TomatoVeganBroth.png",
    broth: "Tomato Vegan Broth",
    description: "You're an ISTJ.",

    traits: [
      "Positive",
      "Authentic",
      "Thoughtful",
      "Selfless",
      "Idealistic",
      "Charismatic",
    ],
  },
  ESTJ: {
    img: "/broths/TomatoVeganBroth.png",
    broth: "Tomato Vegan Broth",
    description: "You're an ESTJ.",

    traits: [
      "Positive",
      "Authentic",
      "Thoughtful",
      "Selfless",
      "Idealistic",
      "Charismatic",
    ],
  },
  ESFJ: {
    img: "/broths/TomatoVeganBroth.png",
    broth: "Tomato Vegan Broth",
    description: "You're an ESFJ.",

    traits: [
      "Positive",
      "Authentic",
      "Thoughtful",
      "Selfless",
      "Idealistic",
      "Charismatic",
    ],
  },
  INTP: {
    img: "/broths/TomatoBroth.png",
    broth: "Tomato Vegan Broth",
    description: "You're an INTP.",

    traits: [
      "Positive",
      "Authentic",
      "Thoughtful",
      "Selfless",
      "Idealistic",
      "Charismatic",
    ],
  },
};

export default function Results() {
  const router = useRouter();
  const { answers } = useQuizContext();

  const mbti = React.useMemo(() => {
    return calculateMBTI(answers);
  }, [answers]);

  const content = brothByMBTI[mbti];

  const mbtiPercentages = React.useMemo(() => {
    return calculateMBTIPercentages(answers);
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
        <h1 className="font-serif font-medium uppercase text-[#FFC950] text-2xl mb-2">
          {mbti}
        </h1>
        <h2 className="font-mona-sans font-extrabold text-white text-5xl uppercase text-balance">
          {brothByMBTI[mbti].broth}
        </h2>
      </div>

      <img src={brothByMBTI[mbti].img} className="-mt-12 max-w-xl"></img>

      {/* <h1>Your MBTI Result</h1>
      <p>Thank you for completing the quiz!</p>
      <p>You are: {mbti}</p> */}

      <div className="max-w-[350px] w-full -mt-16 mb-8">
        <h2 className="font-serif text-[#F19C24] mb-2">Description</h2>
        <p className="text-lg text-white">{brothByMBTI[mbti].description}</p>
      </div>

      <div className="max-w-[350px] w-full mb-12">
        <h2 className="font-serif text-[#F19C24] mb-2">Personality Traits</h2>
        <div className="grid grid-cols-3 gap-4">
          {brothByMBTI[mbti].traits.map((trait, idx) => (
            <span key={idx} className="block text-lg text-white">
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center mb-12">
        <ButtonRed
          label="Take the Quiz Again"
          onClick={() => router.push("/quiz")}
        ></ButtonRed>
      </div>

      {/* VIEW PERCENTAGES */}
      {/* {mbtiPercentages.map(({ pair, percentages }) => (
        <div key={pair.join("")}>
          <p>
            {pair[0]}: {percentages[pair[0]]}% vs {pair[1]}:{" "}
            {percentages[pair[1]]}%
          </p>
        </div>
      ))} */}
    </main>
  );
}
