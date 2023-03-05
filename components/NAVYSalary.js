import React from "react";
import { Linking, Text, View } from "react-native";

export default function NAVYSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about NAVY salary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.joinindiannavy.gov.in/en/page/pay-scale-of-officers.html"
          )
        }
      >
        https://www.joinindiannavy.gov.in/en/page/pay-scale-of-officers.html
      </Text>
    </View>
  );
}
