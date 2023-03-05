import React from "react";
import { Linking, Text, View } from "react-native";

export default function Studymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about UPSC Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL("https://www.insightsonindia.com/downloads/")
        }
      >
        https://www.insightsonindia.com/downloads/
      </Text>
    </View>
  );
}
