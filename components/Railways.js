import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("RAILWAYSSteps", { name: "RAILWAYSSteps" });
        break;
      case "SALARY":
        navigation.navigate("RAILWAYSSalary", { name: "RAILWAYSSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("RAILWAYSNotificationalert", {
          name: "RAILWAYSNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("RAILWAYSEligibility", {
          name: "RAILWAYSEligibility",
        });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("RAILWAYSStudymaterial", {
          name: "RAILWAYSStudymaterial",
        });
        break;
      case "QUALIFICATION":
        navigation.navigate("RAILWAYSQualification", {
          name: "RAILWAYSQualification",
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
            "ALP (Assistant Loco Pilot)",
            "SSE (Senior Section Engineer) Group D",
            "NTPC (Non-Technical Popular Categories)",
            "Station Master",
            "RPF (Railway Protection Force)",
            "ASM (Assistant Station Master)",
            "JE (Junior Engineer)",
            "RPSF (Railway Protection Special Force)",
            "TC (Train Conductor)",
            "FC (Freight Conductor)",
            "Signal Maintainer",
            "Escalator & Elevator Maintainer",
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
