import { View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";
import { useState } from "react";

type QuestionCard = {
  question: {
    title: string;
    options: string[];
    correctAnswer: string;
  };
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

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5, // for android
  },
  question: {
    fontSize: 24,
    fontWeight: "500",
  },
});
