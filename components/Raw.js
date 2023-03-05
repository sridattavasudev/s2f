import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("RAWSteps", { name: "RAWSteps" });
        break;
      case "SALARY":
        navigation.navigate("RAWSalary", { name: "RAWSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("RAWNotificationalert", {
          name: "RAWNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("RAWEligibility", { name: "RAWEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("RAWStudymaterial", { name: "RAWStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("RAWQualification", { name: "RAWQualification" });
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
            "Field Officer",
            "Assistant Field Officer",
            "Senior Field Officer",
            "Deputy Field Officer",
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
