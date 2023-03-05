import React from "react";
import { Linking, Text, View } from "react-native";

export default function IBStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about IB Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://examdays.com/blog/intelligence-bureau-test-book-pdf/"
          )
        }
      >
        https://examdays.com/blog/intelligence-bureau-test-book-pdf/
      </Text>
    </View>
  );
}
