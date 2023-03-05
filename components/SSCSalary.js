import React from "react";
import { Text, View } from "react-native";

export default function SSCSalary() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        To Know about SSC SALARY
      </Text>
      {[
        "Assistant Audit Officer & Assistant Accounts Officer - 47,600 to 1,51,100",
        "Assistant Section Officer, Assistant, Inspector of Income Tax,Inspector, (Central Excise) Inspector (Preventive Officer), Inspector (Examiner), Assistant Enforcement Officer, Sub Inspector - 44,900 to 1,42,400",
        "Assistant/ Superintendent, Divisional Accountant, Sub Inspector(NIA), Junior, Statistical Officer, Statistical Investigator Grade-II - 35,400 to 1,12,400",
        "Auditor, Accountant, Accountant/Junior Accountant - 29,200 to 92,300",
        "Senior SecretariatAssistant/ Upper Division Clerks , Tax Assistant, Sub-Inspector (Central Bureau of Narcotics), Upper Division Clerks - 25,500 to 81,100",
      ].map((item, index) => (
        <Text style={{ fontSize: 17, margin: 4 }} key={index}>
          {index + 1}. {item}
        </Text>
      ))}
    </View>
  );
}
