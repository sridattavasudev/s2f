import React from "react";
import { Text, View } from "react-native";

export default function ARMYSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        INDIAN ARMY SALARY
      </Text>
      <Text style={{ fontSize: 17 }}>
        Average Indian Army Junior Commisioned Officer salary in India is ₹ 6.6
        Lakhs for experience between 19 years to 30 years.{"\n"}
        {"\n"} Junior Commisioned Officer salary at Indian Army India ranges
        between ₹ 0.8 Lakhs to ₹ 10.0 Lakhs.{"\n"}
        {"\n"} Average Indian Army Commissioned Officer salary in India is ₹
        21.4 Lakhs for experience between 12 years to 31 years.{"\n"}
        {"\n"} Commissioned Officer salary at Indian Army India ranges between ₹
        12.0 Lakhs to ₹ 27.0 Lakhs.
      </Text>
    </View>
  );
}
