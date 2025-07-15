"use client";
import {createContext, useContext, useState, FC, ReactNode} from 'react';
import {MBTI} from "@/app/questions";

type QuizContextType = {
  answers: Map<MBTI, number>;
  setAnswers: (newAnswers: Map<MBTI, number>) => void;
}

const QuizContext = createContext<QuizContextType>(null);

export const QuizProvider: FC<{children: ReactNode}> = ({children}) => {
  const [answers, setAnswers] = useState<Map<MBTI, number>>(new Map());

  return (
    <QuizContext.Provider value={{answers, setAnswers}}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
}


