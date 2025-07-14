"use client";
import React from 'react';
import {MBTI, questions} from "@/app/questions";
import ButtonGreen from "@/app/button-green";

const stepImages: Record<number, string> = {
  0: '/illustrations/illustration-1-2x.png',
  1: '/illustrations/illustration-2-2x.png',
  2: '/illustrations/illustration-3-2x.png',
  3: '/illustrations/illustration-4-2x.png',
  4: '/illustrations/illustration-5-2x.png',
  5: '/illustrations/illustration-6-2x.png',
  6: '/illustrations/illustration-7-2x.png',
  7: '/illustrations/illustration-8-2x.png',
  8: '/illustrations/illustration-9-2x.png',
  9: '/illustrations/illustration-10-2x.png',
  10: '/illustrations/illustration-11-2x.png',
  11: '/illustrations/illustration-12-2x.png',
};

export default function Quiz() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Map<MBTI, number>>(new Map());

  if (step >= questions.length) {
    return (
      <div className={"flex flex-col items-center justify-center min-h-screen p-4"}>
        <h1>Your MBTI Result</h1>
        <p>Thank you for completing the quiz!</p>
        <p>Your answers:</p>
        <ul>
          {Array.from(answers.entries()).map(([letter, count]) => (
            <li key={letter}>
              {letter}: {Number(count/questions.length).toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2})}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div id="quiz" className={"flex flex-col items-center justify-between w-screen h-screen max-w-screen max-h-screen overflow-x-hidden overflow-y-hidden pt-4 p-8 md:p-8 gap-4 bg-white"}>
      <img src="/golden-border.svg" className="absolute top-4 left-4 md:top-8 md:left-8"></img>
      <img src="/golden-border.svg" className="scale-x-[-1] absolute top-4 right-4 md:top-8 md:right-8"></img>
      <img src="/golden-border.svg" className="scale-y-[-1] bottom-8 left-8 absolute hidden md:block"></img>
      <img src="/golden-border.svg" className="scale-x-[-1] scale-y-[-1] bottom-8 right-8 absolute hidden md:block"></img>

      <div className="w-full flex items-center flex-col">
      <img src="/red-flower.svg" className="w-5 mb-2"/>
      <span className="font-serif uppercase text-sm md:text-base font-medium text-[#6B1C3D] block mb-6">Question {step+1}/12</span>

        <h1 className="font-mona-sans text-xl md:text-2xl text-[#601616] font-medium mb-10 text-balance max-w-xl text-center">
          {questions[step]?.question}
        </h1>
      </div>



      <img src={stepImages[step]} className="max-w-5xl w-full h-auto mb-10"/>

      <div className="w-full flex items-center flex-col gap-5 mb-12">
      <ButtonGreen
        id={`A${step}`}
        onClick={() => {
          const currentAnswer = questions[step]?.answerA.letter;
          if (currentAnswer) {
            setAnswers(prev => {
              const newCount = (prev.get(currentAnswer) || 0) + 1;
              return new Map(prev).set(currentAnswer, newCount);
            });
          }
          setStep(prev => prev + 1);
        }}
        label={`${questions[step]?.answerA.text}`}
      />

        <ButtonGreen
          id={`B${step}`}
          onClick={() => {
            const currentAnswer = questions[step]?.answerB.letter;
            if (currentAnswer) {
              setAnswers(prev => {
                const newCount = (prev.get(currentAnswer) || 0) + 1;
                return new Map(prev).set(currentAnswer, newCount);
              });
            }
            setStep(prev => prev + 1);
          }}
          label={`${questions[step]?.answerB.text}`}
        />

      </div>



    </div>
  );
}
