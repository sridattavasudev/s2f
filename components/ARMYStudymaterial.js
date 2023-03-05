import React from "react";
import { Text, View, Linking } from "react-native";

export default function ARMYStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Click on the link view Study material
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL("https://www.4ono.com/indian-army-gd-syllabus/")
        }
      >
        https://www.4ono.com/indian-army-gd-syllabus/
      </Text>
    </View>
  );
}
