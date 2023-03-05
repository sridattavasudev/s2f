import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("IBSteps", { name: "IBSteps" });
        break;
      case "SALARY":
        navigation.navigate("IBSalary", { name: "IBSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("IBNotificationalert", {
          name: "IBNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("IBEligibility", { name: "IBEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("IBStudymaterial", { name: "IBStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("IBQualification", { name: "IBQualification" });
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
            "Director Of Intelligence Bureau",
            "Special Director",
            "Additional Director",
            "Joint Director",
            "Deputy Director",
            "Joint Deputy Director",
            "Assistant Director",
            "Deputy Central Intelligence Officer",
            "Assistant Central Intelligence Officer I",
            "Assistant Central Intelligence Officer II",
            "Joint Intelligence Officer I",
            "Joint Intelligence Officer II",
            "Security Assistant",
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
