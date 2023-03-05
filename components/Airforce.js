import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Airforce({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("AIRFORCESteps", { name: "AIRFORCESteps" });
        break;
      case "SALARY":
        navigation.navigate("AIRFORCESalary", { name: "AIRFORCESalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("AIRFORCENotificationalert", {
          name: "AIRFORCENotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("AIRFORCEEligibility", {
          name: "AIRFORCEEligibility",
        });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("AIRFORCEStudymaterial", {
          name: "AIRFORCEStudymaterial",
        });
        break;
      case "QUALIFICATION":
        navigation.navigate("AIRFORCEQualification", {
          name: "AIRFORCEQualification",
        });
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
            "Marshal of the Indian Airforce",
            "Air chief Marshal",
            "Air Marshal",
            "Air wise Marshal",
            "Air Commadore",
            "Group Captain",
            "Wing Commander",
            "Squadron Leader",
            "Flight Lieutenant",
            "Flying Officer",
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
