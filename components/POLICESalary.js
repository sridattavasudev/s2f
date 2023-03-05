import React from "react";
import { Linking, Text, View } from "react-native";

export default function POLICESalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about POLICE salary
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://collegedunia.com/courses/bachelor-of-arts-ba-criminology-and-police-administration/police-officer-salary-in-india"
          )
        }
      >
        https://collegedunia.com/courses/bachelor-of-arts-ba-criminology-and-police-administration/police-officer-salary-in-india
      </Text>
    </View>
  );
}
