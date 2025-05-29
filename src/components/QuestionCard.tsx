import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";
import { useState } from "react";
import type { Question } from "../types";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({
  question: { title, options },
}: QuestionCard) {
  const [selectedOption, setSelectedOption] = useState<string>();
  const onOptionSelected = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Card title={title}>
      <View style={{ gap: 10 }}>
        {options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={selectedOption === option}
            onPress={() => onOptionSelected(option)}
          />
        ))}
      </View>
    </Card>
  );
}
