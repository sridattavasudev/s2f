import React from "react";
import { Linking, Text, View } from "react-native";

export default function NAVYStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about NAVY Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://testbook.com/amp/indian-navy-ssr-aa/books-for-preparation"
          )
        }
      >
        https://testbook.com/amp/indian-navy-ssr-aa/books-for-preparation
      </Text>
    </View>
  );
}
