import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("NAVYSteps", { name: "NAVYSteps" });
        break;
      case "SALARY":
        navigation.navigate("NAVYSalary", { name: "NAVYSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("NAVYNotificationalert", {
          name: "NAVYNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("NAVYEligibility", { name: "NAVYEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("NAVYStudymaterial", { name: "NAVYStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("NAVYQualification", { name: "NAVYQualification" });
        break;
      default:
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Jobs in SSC Categories
        </Text>
        <View>
          {[
            "The Western Naval Command",
            "The Eastern Naval Command",
            "The Southern Naval Command",
          ].map((item, i) => {
            return (
              <Text style={{ fontSize: 20, margin: 5 }} key={i}>
                {i + 1}. {item}
              </Text>
            );
          })}
        </View>
        <View style={{ marginTop: 50 }}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            Process To get hired into above Jobs
          </Text>
          {[
            "STEPS",
            "QUALIFICATION",
            "ELIGIBILITY CRITERIA",
            "NOTIFICATION ALERT",
            "SALARY",
            "STUDY MATERIALS",
          ].map((item, i) => {
            return (
              <Text
                style={{ fontSize: 20, margin: 5 }}
                key={i}
                onPress={() => goToIasCategories(item)}
              >
                {"=> "}
                {item}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
