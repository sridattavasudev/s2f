import React from "react";
import { Linking, Text, View } from "react-native";

export default function AIRFORCESalary() {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
        To get about salary of Airforce Officer
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://www.drona.in/air-force-salary")}
      >
        https://www.drona.in/air-force-salary
      </Text>
    </View>
  );
}
