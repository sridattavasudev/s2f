import React from "react";
import { Linking, Text, View } from "react-native";

export default function TSPSCStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about TSPSC Studymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "http://blog.vyoma.net/tspsc-study-material-telugu-pdf-download/"
          )
        }
      >
        http://blog.vyoma.net/tspsc-study-material-telugu-pdf-download/
      </Text>
    </View>
  );
}
