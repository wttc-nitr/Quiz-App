import { createContext, PropsWithChildren, useContext, useState } from "react";
import Questions from "../questions";
import type { Question } from "../types";
import questions from "../questions";

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
  score: number;
  totalQuestions: number;
};

const QuizContext = createContext<QuizContext>({
  // initial values for the required values
  questionIndex: 0,
  onNext: () => {},
  selectedOption: "",
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
});

// wthout context -> just a wrapper component
export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = Questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string>();

  const [score, setScore] = useState(0);

  const isFinished = questionIndex >= Questions.length;

  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      // reset things
      restart();
      return;
    }

    // check if selected option is correct
    if (selectedOption === question?.correctAnswer) setScore((val) => val + 1);

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
        score,
        totalQuestions: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => {
  return useContext(QuizContext);
};
