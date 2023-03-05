import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("ISROSteps", { name: "ISROSteps" });
        break;
      case "SALARY":
        navigation.navigate("ISROSalary", { name: "ISROSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("ISRONotificationalert", {
          name: "ISRONotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("ISROEligibility", { name: "ISROEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("ISROStudymaterial", { name: "ISROStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("ISROQualification", { name: "ISROQualification" });
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
            "Business Analyst",
            "SCM Lead",
            "Skyroot Aerospace",
            "Junior Software Engineer",
            "Solution Architect",
            "Quality Engineer Avionics Hardware",
            "Propulsion & Test Engineer",
            "Design & Mechanical Integration Engineer",
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
