import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("DRDOSteps", { name: "DRDOSteps" });
        break;
      case "SALARY":
        navigation.navigate("DRDOSalary", { name: "DRDOSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("DRDONotificationalert", {
          name: "DRDONotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("DRDOEligibility", { name: "DRDOEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("DRDOStudymaterial", { name: "DRDOStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("DRDOQualification", { name: "DRDOQualification" });
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
            "Senior Scientist",
            "Junior Scientist",
            "JRF/RA (Junior Research Fellow)",
            "Apprentice",
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
