import { StatusBar } from "expo-status-bar";
import QuizScreen from "./src/app/QuizScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <QuizScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
