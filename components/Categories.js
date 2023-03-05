import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Categories({ navigation }) {
  const submitButton = async () => {
    await AsyncStorage.removeItem("user");
    // console.log(value);
    navigation.navigate("Login", { name: "Login" });
  };
  return (
    <SafeAreaView>
      <View>
        {[
          "Upsc",
          "Ssc",
          "Airforce",
          "Appsc",
          "Bank",
          "Railways",
          "Police",
          "Army",
          "Navy",
          "Drdo",
          "Isro",
          "Cbi",
          "Ib",
          "Raw",
          "Barc",
          "Tspsc",
        ].map((item, i) => {
          return (
            <Text
              key={i}
              onPress={() => navigation.navigate(item, { name: item })}
              style={{ fontSize: 20, margin: 5 }}
            >
              {i + 1}. {item.toUpperCase()}
            </Text>
          );
        })}
      </View>
      <View>
        <Button onPress={submitButton} title="LOGOUT" />
      </View>
    </SafeAreaView>
  );
}
