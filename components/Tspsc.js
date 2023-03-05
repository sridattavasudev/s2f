import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("TSPSCSteps", { name: "TSPSCSteps" });
        break;
      case "SALARY":
        navigation.navigate("TSPSCSalary", { name: "TSPSCSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("TSPSCNotificationalert", {
          name: "TSPSCNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("TSPSCEligibility", { name: "TSPSCEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("TSPSCStudymaterial", {
          name: "TSPSCStudymaterial",
        });
        break;
      case "QUALIFICATION":
        navigation.navigate("TSPSCQualification", {
          name: "TSPSCQualification",
        });
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
            "Group 1",
            "Group 2",
            "Group 3",
            "Group 4",
            "Polytechnic Lecturers",
            "Junior Lecturer",
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
