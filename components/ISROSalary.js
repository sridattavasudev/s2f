import React from "react";
import { Linking, Text, View } from "react-native";

export default function ISROSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about ISRO salary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.safalta.com/amp/blog/isro-scientist-salary"
          )
        }
      >
        https://www.safalta.com/amp/blog/isro-scientist-salary
      </Text>
    </View>
  );
}
