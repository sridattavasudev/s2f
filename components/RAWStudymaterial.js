import React from "react";
import { Linking, Text, View } from "react-native";

export default function RAWStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about RAW Study material
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.safalta.com/careers/how-to-join-raw-in-india"
          )
        }
      >
        https://www.safalta.com/careers/how-to-join-raw-in-india
      </Text>
    </View>
  );
}
