import React from "react";
import { Linking, Text, View } from "react-native";

export default function IBSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about IB salary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://prepp.in/ib-acio-exam/salary")}
      >
        https://prepp.in/ib-acio-exam/salary
      </Text>
    </View>
  );
}
