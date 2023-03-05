import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./components/Signup";
import Airforce from "./components/Airforce";
import Appsc from "./components/Appsc";
import Army from "./components/Army";
import Bank from "./components/Bank";
import Barc from "./components/Barc";
import Cbi from "./components/Cbi";
import Drdo from "./components/Drdo";
import Ib from "./components/Ib";
import Isro from "./components/Isro";
import Navy from "./components/Navy";
import Police from "./components/Police";
import Railways from "./components/Railways";
import Raw from "./components/Raw";
import Ssc from "./components/Ssc";
import Tspsc from "./components/Tspsc";
import Upsc from "./components/Upsc";
import Categories from "./components/Categories";
import Steps from "./components/Steps";
import Studymaterial from "./components/Studymaterial";
import Salary from "./components/Salary";
import Qualification from "./components/Qualification";
import Notificationalert from "./components/Notificationalert";
import Eligibility from "./components/Eligibility";
import SSCNotificationalert from "./components/SSCNotificationalert";
import SSCQualification from "./components/SSCQualification";
import SSCSalary from "./components/SSCSalary";
import SSCSteps from "./components/SSCSteps";
import SSCStudymaterial from "./components/SSCStudymaterial";
import AIRFORCEEligibility from "./components/AIRFORCEEligibility";
import AIRFORCENotificationalert from "./components/AIRFORCENotificationalert";
import AIRFORCEQualification from "./components/AIRFORCEQualification";
import AIRFORCESalary from "./components/AIRFORCESalary";
import AIRFORCESteps from "./components/AIRFORCESteps";
import AIRFORCEStudymaterial from "./components/AIRFORCEStudymaterial";
import APPSCEligibility from "./components/APPSCEligibility";
import APPSCNotificationalert from "./components/APPSCNotificationalert";
import APPSCQualification from "./components/APPSCQualification";
import APPSCSalary from "./components/APPSCSalary";
import APPSCSteps from "./components/APPSCSteps";
import APPSCStudymaterial from "./components/APPSCStudymaterial";
import ARMYEligibility from "./components/ARMYEligibility";
import ARMYNotificationalert from "./components/ARMYNotificationalert";
import ARMYQualification from "./components/ARMYQualification";
import ARMYSalary from "./components/ARMYSalary";
import ARMYSteps from "./components/ARMYSteps";
import ARMYStudymaterial from "./components/ARMYStudymaterial";
import BANKEligibility from "./components/BANKEligibility";
import BANKNotificationalert from "./components/BANKNotificationalert";
import BANKQualification from "./components/BANKQualification";
import BANKSalary from "./components/BANKSalary";
import BANKSteps from "./components/BANKSteps";
import BANKStudymaterial from "./components/BANKStudymaterial";
import BARCEligibility from "./components/BARCEligibility";
import BARCNotificationalert from "./components/BARCNotificationalert";
import BARCQualification from "./components/BARCQualification";
import BARCSalary from "./components/BARCSalary";
import BARCSteps from "./components/BARCSteps";
import BARCStudymaterial from "./components/BARCStudymaterial";
import CBIEligibility from "./components/CBIEligibility";
import CBINotificationalert from "./components/CBINotificationalert";
import CBIQualification from "./components/CBIQualification";
import CBISalary from "./components/CBISalary";
import CBISteps from "./components/CBISteps";
import CBIStudymaterial from "./components/CBIStudymaterial";
import DRDOEligibility from "./components/DRDOEligibility";
import DRDONotificationalert from "./components/DRDONotificationalert";
import DRDOQualification from "./components/DRDOQualification";
import DRDOSalary from "./components/DRDOSalary";
import DRDOSteps from "./components/DRDOSteps";
import DRDOStudymaterial from "./components/DRDOStudymaterial";
import IBEligibility from "./components/IBEligibility";
import IBNotificationalert from "./components/IBNotificationalert";
import IBQualification from "./components/IBQualification";
import IBSalary from "./components/IBSalary";
import IBSteps from "./components/IBSteps";
import IBStudymaterial from "./components/IBStudymatyerial";
import ISROEligibility from "./components/ISROEligibility";
import ISRONotificationalert from "./components/ISRONotificationalert";
import ISROQualification from "./components/ISROQualification";
import ISROSalary from "./components/ISROSalary";
import ISROSteps from "./components/ISROSteps";
import ISROStudymaterial from "./components/ISROStudymaterial";
import NAVYEligibility from "./components/NAVYEligibility";
import NAVYNotificationalert from "./components/NAVYNotificationalert";
import NAVYQualification from "./components/NAVYQualification";
import NAVYSalary from "./components/NAVYSalary";
import NAVYSteps from "./components/NAVYSteps";
import NAVYStudymaterial from "./components/NAVYStudymaterial";
import POLICEEligibility from "./components/POLICEEligibility";
import POLICENotificationalert from "./components/POLICENotificationalert";
import POLICEQualification from "./components/POLICEQualification";
import POLICESalary from "./components/POLICESalary";
import POLICESteps from "./components/POLICESteps";
import POLICEStudymaterial from "./components/POLICEStudymaterial";
import RAILWAYSEligibility from "./components/RAILWAYSEligibility";
import RAILWAYSNotificationalert from "./components/RAILWAYSNotificationalert";
import RAILWAYSQualification from "./components/RAILWAYSQualification";
import RAILWAYSSalary from "./components/RAILWAYSSalary";
import RAILWAYSStudymaterial from "./components/RAILWAYSStudymaterial";
import RAILWAYSSteps from "./components/RAILWAYSSteps";
import RAWEligibility from "./components/RAWEligibility";
import RAWNotificationalert from "./components/RAWNotificationalert";
import RAWQualification from "./components/RAWQualification";
import RAWSalary from "./components/RAWSalary";
import RAWSteps from "./components/RAWSteps";
import RAWStudymaterial from "./components/RAWStudymaterial";
import TSPSCEligibility from "./components/TSPSCEligibility";
import TSPSCNotificationalert from "./components/TSPSCNotificationalert";
import TSPSCQualification from "./components/TSPSCQualification";
import TSPSCSalary from "./components/TSPSCSalary";
import TSPSCSteps from "./components/TSPSCSteps";
import TSPSCStudymaterial from "./components/TSPSCStudymaterial";
import SSCEligibilityCriteria from "./components/SSCEligibilityCriteria";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Sign 2 Future" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Sign 2 Future" }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="Upsc"
          component={Upsc}
          options={{ title: "UPSC-Union Public Service Commission" }}
        />
        <Stack.Screen
          name="Ssc"
          component={Ssc}
          options={{ title: "SSC-Staff Selection Commission" }}
        />
        <Stack.Screen
          name="Airforce"
          component={Airforce}
          options={{ title: "AIR FORCE" }}
        />
        <Stack.Screen
          name="Appsc"
          component={Appsc}
          options={{ title: "APPSC-Andhra Pradesh Public Service Commission" }}
        />
        <Stack.Screen
          name="Bank"
          component={Bank}
          options={{ title: "IBPS-Institute of Banking Personnel Selection " }}
        />
        <Stack.Screen
          name="Railways"
          component={Railways}
          options={{ title: "RAILWAYS" }}
        />
        <Stack.Screen
          name="Police"
          component={Police}
          options={{ title: "POLICE" }}
        />
        <Stack.Screen
          name="Army"
          component={Army}
          options={{ title: "ARMY" }}
        />
        <Stack.Screen
          name="Navy"
          component={Navy}
          options={{ title: "NAVY" }}
        />
        <Stack.Screen
          name="Drdo"
          component={Drdo}
          options={{
            title: "DRDO-Defence Research and Development Organisation",
          }}
        />
        <Stack.Screen
          name="Isro"
          component={Isro}
          options={{ title: "ISRO-Indian Space Research Organisation" }}
        />
        <Stack.Screen
          name="Cbi"
          component={Cbi}
          options={{ title: "CBI- Central Bureau of Investigation" }}
        />
        <Stack.Screen
          name="Ib"
          component={Ib}
          options={{ title: "IB-Intelligence Bureau" }}
        />
        <Stack.Screen
          name="Raw"
          component={Raw}
          options={{ title: "RAW-Research and Analysis Wing" }}
        />
        <Stack.Screen
          name="Barc"
          component={Barc}
          options={{ title: "BARC-Bhabha Atomic Research Centre" }}
        />
        <Stack.Screen
          name="Tspsc"
          component={Tspsc}
          options={{
            title: "TSPSC-Telangana State Public Service Commission.",
          }}
        />
        <Stack.Screen
          name="Steps"
          component={Steps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="Studymaterial"
          component={Studymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        <Stack.Screen
          name="Salary"
          component={Salary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="Qualification"
          component={Qualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="Notificationalert"
          component={Notificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="Eligibility"
          component={Eligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        {/* SSC categories */}
        <Stack.Screen
          name="SSCNotificationalert"
          component={SSCNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="SSCQualification"
          component={SSCQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="SSCSalary"
          component={SSCSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="SSCSteps"
          component={SSCSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="SSCStudymaterial"
          component={SSCStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        <Stack.Screen
          name="SSCEligibilityCriteria"
          component={SSCEligibilityCriteria}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        {/* Airforce categories */}
        <Stack.Screen
          name="AIRFORCEEligibility"
          component={AIRFORCEEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="AIRFORCENotificationalert"
          component={AIRFORCENotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="AIRFORCEQualification"
          component={AIRFORCEQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="AIRFORCESalary"
          component={AIRFORCESalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="AIRFORCESteps"
          component={AIRFORCESteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="AIRFORCEStudymaterial"
          component={AIRFORCEStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* APPSC categories */}
        <Stack.Screen
          name="APPSCEligibility"
          component={APPSCEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="APPSCNotificationalert"
          component={APPSCNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="APPSCQualification"
          component={APPSCQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="APPSCSalary"
          component={APPSCSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="APPSCSteps"
          component={APPSCSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="APPSCStudymaterial"
          component={APPSCStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* Army categories */}
        <Stack.Screen
          name="ARMYEligibility"
          component={ARMYEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="ARMYNotificationalert"
          component={ARMYNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="ARMYQualification"
          component={ARMYQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="ARMYSalary"
          component={ARMYSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="ARMYSteps"
          component={ARMYSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="ARMYStudymaterial"
          component={ARMYStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* BANK categories */}
        <Stack.Screen
          name="BANKEligibility"
          component={BANKEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="BANKNotificationalert"
          component={BANKNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="BANKQualification"
          component={BANKQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="BANKSalary"
          component={BANKSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="BANKSteps"
          component={BANKSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="BANKStudymaterial"
          component={BANKStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* BARC categories */}
        <Stack.Screen
          name="BARCEligibility"
          component={BARCEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="BARCNotificationalert"
          component={BARCNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="BARCQualification"
          component={BARCQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="BARCSalary"
          component={BARCSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="BARCSteps"
          component={BARCSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="BARCStudymaterial"
          component={BARCStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* CBI categories */}
        <Stack.Screen
          name="CBIEligibility"
          component={CBIEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="CBINotificationalert"
          component={CBINotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="CBIQualification"
          component={CBIQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="CBISalary"
          component={CBISalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="CBISteps"
          component={CBISteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="CBIStudymaterial"
          component={CBIStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* DRDO categories */}
        <Stack.Screen
          name="DRDOEligibility"
          component={DRDOEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="DRDONotificationalert"
          component={DRDONotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="DRDOQualification"
          component={DRDOQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="DRDOSalary"
          component={DRDOSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="DRDOSteps"
          component={DRDOSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="DRDOStudymaterial"
          component={DRDOStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* IB categories */}
        <Stack.Screen
          name="IBEligibility"
          component={IBEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="IBNotificationalert"
          component={IBNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="IBQualification"
          component={IBQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="IBSalary"
          component={IBSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="IBSteps"
          component={IBSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="IBStudymaterial"
          component={IBStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* ISRO categories */}
        <Stack.Screen
          name="ISROEligibility"
          component={ISROEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="ISRONotificationalert"
          component={ISRONotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="ISROQualification"
          component={ISROQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="ISROSalary"
          component={ISROSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="ISROSteps"
          component={ISROSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="ISROStudymaterial"
          component={ISROStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* NAVY categories */}
        <Stack.Screen
          name="NAVYEligibility"
          component={NAVYEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="NAVYNotificationalert"
          component={NAVYNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="NAVYQualification"
          component={NAVYQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="NAVYSalary"
          component={NAVYSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="NAVYSteps"
          component={NAVYSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="NAVYStudymaterial"
          component={NAVYStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* POLICE categories */}
        <Stack.Screen
          name="POLICEEligibility"
          component={POLICEEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="POLICENotificationalert"
          component={POLICENotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="POLICEQualification"
          component={POLICEQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="POLICESalary"
          component={POLICESalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="POLICESteps"
          component={POLICESteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="POLICEStudymaterial"
          component={POLICEStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* RAILWAYS categories */}
        <Stack.Screen
          name="RAILWAYSEligibility"
          component={RAILWAYSEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="RAILWAYSNotificationalert"
          component={RAILWAYSNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="RAILWAYSQualification"
          component={RAILWAYSQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="RAILWAYSSalary"
          component={RAILWAYSSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="RAILWAYSSteps"
          component={RAILWAYSSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="RAILWAYSStudymaterial"
          component={RAILWAYSStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* RAW categories */}
        <Stack.Screen
          name="RAWEligibility"
          component={RAWEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="RAWNotificationalert"
          component={RAWNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="RAWQualification"
          component={RAWQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="RAWSalary"
          component={RAWSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="RAWSteps"
          component={RAWSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="RAWStudymaterial"
          component={RAWStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
        {/* TSPSC categories */}
        <Stack.Screen
          name="TSPSCEligibility"
          component={TSPSCEligibility}
          options={{ title: "ELIGIBILITY CRITERIA" }}
        />
        <Stack.Screen
          name="TSPSCNotificationalert"
          component={TSPSCNotificationalert}
          options={{ title: "NOTIFICATION ALERT" }}
        />
        <Stack.Screen
          name="TSPSCQualification"
          component={TSPSCQualification}
          options={{ title: "QUALIFICATION" }}
        />
        <Stack.Screen
          name="TSPSCSalary"
          component={TSPSCSalary}
          options={{ title: "SALARY" }}
        />
        <Stack.Screen
          name="TSPSCSteps"
          component={TSPSCSteps}
          options={{ title: "STEPS" }}
        />
        <Stack.Screen
          name="TSPSCStudymaterial"
          component={TSPSCStudymaterial}
          options={{ title: "STUDY MATERIAL" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
