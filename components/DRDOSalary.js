import React from "react";
import { Linking, Text, View } from "react-native";

export default function DRDOSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
        To Know about DRDOSalary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://www.drdo.gov.in/scientists")}
      >
        https://www.drdo.gov.in/scientists
      </Text>
    </View>
  );
}
