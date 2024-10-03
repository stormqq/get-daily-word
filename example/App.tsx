import { StyleSheet, Text, View } from "react-native";

import * as GetDailyWord from "get-daily-word";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Daily word: {GetDailyWord.getDailyWord()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
