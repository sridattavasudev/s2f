import React from "react";
import { Linking, Text, View } from "react-native";

export default function RAWSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about RAW salary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.collegedisha.com/articles/raw-agent-salary-pay-scale-and-allowances-in-india"
          )
        }
      >
        https://www.collegedisha.com/articles/raw-agent-salary-pay-scale-and-allowances-in-india
      </Text>
    </View>
  );
}
