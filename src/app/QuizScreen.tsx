import { Text, StyleSheet, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function QuizScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = Questions[questionIndex];

  const onNext = () => {
    setQuestionIndex((index) => index + 1);
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        <View style={{ gap: 15 }}>
          {question ? (
            <>
              <QuestionCard question={question} />
              <Text style={styles.time}>20 sec</Text>
            </>
          ) : (
            <Card title="Well done!!">
              <Text>Correct answers: 3/5</Text>
              <Text>Best score: 9</Text>
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
