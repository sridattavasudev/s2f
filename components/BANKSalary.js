import React from "react";
import { Linking, Text, View } from "react-native";

export default function BANKSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To get BANKSALARY
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.safalta.com/blog/ibps-po-salary-job-profile#:~:text=This%20means%20the%20IBPS%20PO,PO%20salary%20is%20enumerated%20below."
          )
        }
      >
        https://www.safalta.com/blog/ibps-po-salary-job-profile#:~:text=This%20means%20the%20IBPS%20PO,PO%20salary%20is%20enumerated%20below.
      </Text>
    </View>
  );
}
