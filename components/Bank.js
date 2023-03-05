import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Bank({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("BANKSteps", { name: "BANKSteps" });
        break;
      case "SALARY":
        navigation.navigate("BANKSalary", { name: "BANKSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("BANKNotificationalert", {
          name: "BANKNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("BANKEligibility", { name: "BANKEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("BANKStudymaterial", { name: "BANKStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("BANKQualification", { name: "BANKQualification" });
        break;
      default:
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Jobs in BANK Categories
        </Text>
        <View>
          {[
            "Branch Manager",
            "Financial Advisor",
            "Bank Clerk",
            "Manager",
            "Loan Administrator",
            "Assistant Underwriter",
            "Loan Officer",
            "Internal Auditor",
            "Credit Analyst",
            "Banker",
            "Financial Manager",
            "Bank Manager",
            "Accountant",
            "Clerk",
            "Officer",
            "Banking Associate",
            "Assistant Treasurer",
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
