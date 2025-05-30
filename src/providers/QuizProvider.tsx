import { createContext, PropsWithChildren, useContext, useState } from "react";
import Questions from "../questions";
import type { Question } from "../types";

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
};

const QuizContext = createContext<QuizContext>({
  // initial values for the required values
  questionIndex: 0,
  onNext: () => {},
  selectedOption: "",
  setSelectedOption: () => {},
});

// wthout context -> just a wrapper component
export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = Questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string>();

  const onNext = () => {
    setQuestionIndex((index) => index + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => {
  return useContext(QuizContext);
};
