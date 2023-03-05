import React from "react";
import { Linking, Text, View } from "react-native";

export default function ISROStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about IB salary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://byjusexamprep.com/mechanical-engineering-exams/isro-scientist-engineer-exam-books_amp"
          )
        }
      >
        https://byjusexamprep.com/mechanical-engineering-exams/isro-scientist-engineer-exam-books
      </Text>
    </View>
  );
}
