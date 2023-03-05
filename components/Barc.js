import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("BARCSteps", { name: "BARCSteps" });
        break;
      case "SALARY":
        navigation.navigate("BARCSalary", { name: "BARCSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("BARCNotificationalert", {
          name: "BARCNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("BARCEligibility", { name: "BARCEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("BARCStudymaterial", { name: "BARCStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("BARCQualification", { name: "BARCQualification" });
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
            "Nurse/A",
            "Scientific Assistant/B (Pathology)",
            "Scientific Assistant/B (Nuclear Medicine Technologist)",
            "Scientific Assistant/C (Medical Social Worker)",
            "Sub Officer/B",
            "Scientific Assistant/B (Civil)",
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
