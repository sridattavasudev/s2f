import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Upsc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("Steps", { name: "Steps" });
        break;
      case "SALARY":
        navigation.navigate("Salary", { name: "Salary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("Notificationalert", { name: "Notificationalert" });
        break;
      case "ELIGIBILITY":
        navigation.navigate("Eligibility", { name: "Eligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("Studymaterial", { name: "Studymaterial" });
        break;
      case "QUALIFICATION":
        navigation.navigate("Qualification", { name: "Qualification" });
        break;
      default:
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            Jobs in UPSC Categories
          </Text>
          {[
            "IAS (Indian administrative Service)",
            "IPS (Indian Police Service)",
            "IFS (Indian foreign Service)",
            "IA & AS (Indian Audit & Accounts Service)",
            "ICAS (Indian Civil Accounts Service)",
            "ICLS (Indian Corporate Law Service)",
            "IDAS (Indian Defence Accounts Service)",
            "IDES (Indian Defence Estates States)",
            "IIS (Indian Information Service)",
            "IOFS (Indian Ordnance Factories Service)",
            "ICFS (Indian Communication Finance Services)",
            "IPoS (Indian Postal Service)",
            "IRAS (Indian Railway Accounts Service)",
            "IRPS (Indian Railway Personnel Service)",
            "IRTS (Indian Railway Traffic Service)",
            "IRS (Indian Revenue Service)",
            "ITS (Indian Trade Service)",
            "RPF (Indian Protection Force)",
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
            "ELIGIBILITY",
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
