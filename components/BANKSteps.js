import React from "react";
import { Text, View } from "react-native";

export default function BANKSteps() {
  return (
    <View>
      {[
        "Earn a bachelor's degree.",
        "Pursue education in banking.Understand how job portals work.",
        "Know the eligibility criteria and educational qualification.",
        "Clear the hiring process. Know about the service bond.",
      ].map((item, index) => (
        <Text
          style={{ fontSize: 17, textAlign: "justify", margin: 4 }}
          key={index}
        >
          {index + 1}. {item}
        </Text>
      ))}
    </View>
  );
}
