import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Appsc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("APPSCSteps", { name: "APPSCSteps" });
        break;
      case "SALARY":
        navigation.navigate("APPSCSalary", { name: "APPSCSalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("APPSCNotificationalert", {
          name: "APPSCNotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("APPSCEligibility", { name: "APPSCEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("APPSCStudymaterial", {
          name: "APPSCStudymaterial",
        });
        break;
      case "QUALIFICATION":
        navigation.navigate("APPSCQualification", {
          name: "APPSCQualification",
        });
        break;
      default:
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Jobs in APPSC Categories
        </Text>
        <View>
          {[
            "Deputy Collector",
            "Assistant Commissioner",
            "Deputy Superintendent of police (cat 2)",
            "Deputy Superintendent of Jails (Men)",
            "District fire officer",
            "Asst treasury officer/Asst accounts officer",
            "Regional Transport Officer",
            "Asst Prohibition & Excise Superintendent",
            "Mandal Parishad Development Officer",
            "District Registrar",
            "District Employment Officer",
            "Deputy Registrar",
            "District Tribal Welfare Officer",
            "District Social Welfare Officer",
            "District BC Welfare Officer",
            "District Panchayat Officer",
            "Municipal Commissioner Grade-II",
            "Administrative Officer/Lay Secretary and Treasurer Garde-II",
            "Asst Audit Officer",
          ].map((item, i) => {
            return (
              <Text style={{ fontSize: 17, margin: 5 }} key={i}>
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
