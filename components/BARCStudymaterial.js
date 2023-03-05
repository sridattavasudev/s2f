import React from "react";
import { Linking, Text, View } from "react-native";

export default function BARCStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        TO View BARC STUDY MATERIAL DETAILS
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://examsdaily.in/barc-scientific-assistant-study-material-download-free-pdf"
          )
        }
      >
        https://examsdaily.in/barc-scientific-assistant-study-material-download-free-pdf
      </Text>
    </View>
  );
}
