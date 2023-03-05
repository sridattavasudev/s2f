import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Ssc({ navigation }) {
  const goToIasCategories = (item) => {
    switch (item) {
      case "STEPS":
        navigation.navigate("POLICESteps", { name: "POLICESteps" });
        break;
      case "SALARY":
        navigation.navigate("POLICESalary", { name: "POLICESalary" });
        break;
      case "NOTIFICATION ALERT":
        navigation.navigate("POLICENotificationalert", {
          name: "POLICENotificationalert",
        });
        break;
      case "ELIGIBILITY CRITERIA":
        navigation.navigate("POLICEEligibility", { name: "POLICEEligibility" });
        break;
      case "STUDY MATERIALS":
        navigation.navigate("POLICEStudymaterial", {
          name: "POLICEStudymaterial",
        });
        break;
      case "QUALIFICATION":
        navigation.navigate("POLICEQualification", {
          name: "POLICEQualification",
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
            "Constable",
            "Head Constable",
            "Additional Director general of police",
            "Sheriff's",
            "Security Guard",
            "Border Patrol Agent",
            "Criminal Investigation",
            "Police Officer",
            "Detective",
            "Correctional Officer",
            "Senior Superintendent Of Police",
            "Investigative Assistant",
            "Chief Of Police",
            "Special Agent",
            "Inspector",
            "Assistant Sub-inspector of police",
            "Private Investigator",
            "Assistant Superintendent",
            "Director General of Police",
            "Military Police",
            "Law enforcement officer",
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
