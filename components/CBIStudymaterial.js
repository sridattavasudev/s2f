import React from "react";
import { Linking, Text, View } from "react-native";

export default function CBIStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To view of CBI Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://prepp.in/cbi-recruitment-exam")}
      >
        https://prepp.in/cbi-recruitment-exam
      </Text>
    </View>
  );
}
