import React from "react";
import { Text, View } from "react-native";

export default function Steps() {
  return (
    <View>
      <Text style={{ fontSize: 17 }}>Preliminary exam(objective test)</Text>
      <Text style={{ fontSize: 17 }}>Mains exam (written test)</Text>
      <Text style={{ fontSize: 17 }}>Personality test (Interview)</Text>
    </View>
  );
}
