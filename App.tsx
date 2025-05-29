import { StatusBar } from "expo-status-bar";
import QuizScreen from "./src/app/QuizScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import QuizProvider from "./src/providers/QuizProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
