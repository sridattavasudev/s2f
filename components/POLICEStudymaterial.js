import React from "react";
import { Linking, Text, View } from "react-native";

export default function POLICEStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about POLICE Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://recruitmentresult.com/police-exam-preparation-book-study-material/"
          )
        }
      >
        https://recruitmentresult.com/police-exam-preparation-book-study-material/
      </Text>
    </View>
  );
}
