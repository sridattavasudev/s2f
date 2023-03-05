import React from "react";
import { Text, View, Linking } from "react-native";

export default function RAILWAYSStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about RAILWAYS Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.ejobhub.in/2016/12/railway-exam-preparation-books.html"
          )
        }
      >
        https://www.ejobhub.in/2016/12/railway-exam-preparation-books.html
      </Text>
    </View>
  );
}
