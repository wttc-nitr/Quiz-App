import { Text, StyleSheet, Pressable } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOption = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOption) {
  const { setSelectedOption, selectedOption } = useQuizContext();

  const isSelected = option === selectedOption;

  return (
    <Pressable
      style={[
        styles.container,
        isSelected && { backgroundColor: "#E1F396", borderColor: "#E1F396" },
      ]}
      onPress={() => setSelectedOption(option)}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 20,
  },
});
