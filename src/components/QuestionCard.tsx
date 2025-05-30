import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import Card from "./Card";
import type { Question } from "../types";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({
  question: { title, options },
}: QuestionCard) {
  return (
    <Card title={title}>
      <View style={{ gap: 10 }}>
        {options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}
