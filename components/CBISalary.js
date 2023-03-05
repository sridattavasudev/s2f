import React from "react";
import { Linking, Text, View } from "react-native";

export default function CBISalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about CBI Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL("https://www.safalta.com/amp/blog/cbi-officer-salary")
        }
      >
        https://www.safalta.com/amp/blog/cbi-officer-salary
      </Text>
    </View>
  );
}
