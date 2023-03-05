import React from "react";
import { Linking, Text, View } from "react-native";

export default function APPSCStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To get APPSCStudymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.manabadi.co.in/institute/SyllabusWiseSM.aspx?SysId=9"
          )
        }
      >
        https://www.manabadi.co.in/institute/SyllabusWiseSM.aspx?SysId=9
      </Text>
    </View>
  );
}
