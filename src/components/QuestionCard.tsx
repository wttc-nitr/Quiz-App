import { Text, View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";

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
  const selectedOption = options[0];
  const onOptionSelected = (option: string) => {
    console.warn("selected", option);
  };

  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{title}</Text>
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
    </View>
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
