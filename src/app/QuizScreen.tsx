import { Text, StyleSheet, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useState } from "react";

export default function QuizScreen() {
  const { question, onNext, score, totalQuestions, questionIndex, bestScore } =
    useQuizContext();

  const [timer, setTimer] = useState(20);

  useEffect(() => {
    setTimer(20);
    const interval = setInterval(() => {
      setTimer((x) => x - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [question]);

  useEffect(() => {
    if (timer <= 0 && question) onNext();
  }, [timer]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>
            {questionIndex >= totalQuestions
              ? "Result:"
              : `Question ${questionIndex + 1}/${totalQuestions}`}
          </Text>
        </View>

        {/* Body */}
        <View style={{ gap: 15 }}>
          {question ? (
            <>
              <QuestionCard question={question} />
              <Text style={styles.time}>{timer} sec</Text>
            </>
          ) : (
            <Card title="Well done!!">
              <Text>
                Correct answers: {score}/{totalQuestions}
              </Text>
              <Text>Best score: {bestScore}</Text>
            </Card>
          )}
        </View>

        {/* Footer */}
        <CustomButton
          title="Next"
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
          onPress={onNext}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
    fontWeight: "500",
  },
  time: { textAlign: "center", fontWeight: "bold", color: "#005055" },
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 30,
  },
});
