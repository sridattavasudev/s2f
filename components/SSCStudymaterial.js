import React from "react";
import { Linking, Text, View } from "react-native";

export default function SSCStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about SSC Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL("https://www.downloadpdfnotes.com/search/label/books")
        }
      >
        https://www.downloadpdfnotes.com/search/label/books
      </Text>
    </View>
  );
}
