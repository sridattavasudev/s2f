import React from "react";
import { Linking, Text, View } from "react-native";

export default function APPSCSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To get about APPSCSalary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://prepp.in/appsc-exam/salary")}
      >
        https://prepp.in/appsc-exam/salary
      </Text>
    </View>
  );
}
