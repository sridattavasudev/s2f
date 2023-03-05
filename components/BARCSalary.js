import React from "react";
import { Linking, Text, View } from "react-native";

export default function BARCSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Click on the link to view salary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL("https://www.barc.gov.in/rti/payscale.html")
        }
      >
        https://www.barc.gov.in/rti/payscale.html
      </Text>
    </View>
  );
}
