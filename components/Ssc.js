import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("SSCSteps", { name: "SSCSteps" });
        break;
      case "SALARY":
        navigation.navigate("SSCSalary", { name: "SSCSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("SSCNotificationalert", {
          name: "SSCNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("SSCEligibilityCriteria", {
          name: "SSCEligibilityCriteria",
        });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("SSCStudymaterial", { name: "SSCStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("SSCQualification", { name: "SSCQualification" });
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
            "SSC CGL",
            "SSC CHSL",
            "SSC JE",
            "SSC GD",
            "SSC CPO",
            "SSC MTS",
            "SSC Stenographer",
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
