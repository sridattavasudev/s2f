import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Army({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("ARMYSteps", { name: "ARMYSteps" });
        break;
      case "SALARY":
        navigation.navigate("ARMYSalary", { name: "ARMYSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("ARMYNotificationalert", {
          name: "ARMYNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("ARMYEligibility", { name: "ARMYEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("ARMYStudymaterial", { name: "ARMYStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("ARMYQualification", { name: "ARMYQualification" });
        break;
      default:
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Jobs in AIR FORCE Categories
        </Text>
        <View>
          {[
            "Major General",
            "Brigadier",
            "Field Marshal",
            "General",
            "Lieutenant General",
            "Colonel",
            "Lieutenant Colonel",
            "Captain",
            "Lieutenant",
            "Subedar Major",
            "Subedar",
            "Naib Subedar",
            "Havildar",
            "Naik",
            "Sepoy",
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
