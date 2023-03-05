import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("CBISteps", { name: "CBISteps" });
        break;
      case "SALARY":
        navigation.navigate("CBISalary", { name: "CBISalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("CBINotificationalert", {
          name: "CBINotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("CBIEligibility", { name: "CBIEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("CBIStudymaterial", { name: "CBIStudymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("CBIQualification", { name: "CBIQualification" });
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
            "Special Director",
            "Additional Director",
            "Joint Director",
            "Deputy Inspector General of Police",
            "Senior Superintendent Of Police",
            "Superintendent of Police",
            "Additional Superintendent Of Police",
            "Deputy Superintendent of Police",
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
