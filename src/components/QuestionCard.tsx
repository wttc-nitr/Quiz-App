import { Text, View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";

export default function QuestionCard() {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>What is React Native?</Text>
      <View style={{ gap: 10 }}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
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
