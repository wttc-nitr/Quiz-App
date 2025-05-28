import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

type Card = {
  title: string;
};

export default function Card({ title, children }: PropsWithChildren<Card>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
