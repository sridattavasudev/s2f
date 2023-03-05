import React from "react";
import { Linking, Text, View } from "react-native";

export default function AIRFORCEStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: "bold" }}>
        To get Studymaterial Click below link
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL("https://testbook.com/amp/air-force-group-x/books")
        }
      >
        https://testbook.com/amp/air-force-group-x/books
      </Text>
    </View>
  );
}
