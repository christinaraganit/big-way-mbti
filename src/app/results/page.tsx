"use client";
import React from 'react';
import {calculateMBTI, calculateMBTIPercentages} from "@/app/questions";
import {useQuizContext} from "@/app/quiz-context";

export default function Results() {
  const { answers } = useQuizContext();

  const mbti = React.useMemo(() => {
    return calculateMBTI(answers);
  }, [answers]);

  const mbtiPercentages = React.useMemo(() => {
    return calculateMBTIPercentages(answers);
  }, [answers]);

  return (
    <div className={"flex flex-col items-center justify-center min-h-screen p-4"}>
      <h1>Your MBTI Result</h1>
      <p>Thank you for completing the quiz!</p>
      <p>You are: {mbti}</p>
      {mbtiPercentages.map(({ pair, percentages }) => (
        <div key={pair.join('')}>
          <p>
            {pair[0]}: {percentages[pair[0]]}% vs {pair[1]}: {percentages[pair[1]]}%
          </p>
        </div>
      ))}
    </div>
  )
}