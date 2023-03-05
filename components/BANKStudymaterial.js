import React from "react";
import { Text, View, Linking } from "react-native";

export default function BANKStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Click on the link To get Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.bankexamstoday.com/2016/01/ibps-sbi-books-in-pdf-download-free.html"
          )
        }
      >
        https://www.bankexamstoday.com/2016/01/ibps-sbi-books-in-pdf-download-free.html
      </Text>
    </View>
  );
}
