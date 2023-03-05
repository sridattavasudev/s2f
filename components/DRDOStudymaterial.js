import React from "react";
import { Linking, Text, View } from "react-native";

export default function DRDOStudymaterial() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To view DRDOStudymaterial
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://dreambiginstitution.com/drdo-ceptam-study-material/"
          )
        }
      >
        https://dreambiginstitution.com/drdo-ceptam-study-material/
      </Text>
    </View>
  );
}
