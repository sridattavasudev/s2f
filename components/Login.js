import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import reactNativeAxios from "react-native-axios";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitButton = async () => {
    try {
      let response = await axios.post(
        "https://s2f-backend.onrender.com/api/auth/customer-login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status == 200) {
        Alert.alert("Login Successful");
        navigation.navigate("Categories", { name: "Categories" });
      }
    } catch (error) {
      Alert.alert("Login failed");
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            textAlign: "center",
            color: "#449bd5",
            marginBottom: 30,
          }}
        >
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          margin: 15,
        }}
      >
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder=" Email ID"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          margin: 15,
        }}
      >
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder=" Password"
        />
      </View>
      <View style={{ margin: 13 }}>
        <Button onPress={submitButton} title="LOGIN" />
      </View>
      <View style={{ marginLeft: 35 }}>
        <Text style={{ fontSize: 15 }}>
          Don't have an Account?{" "}
          <Text
            style={{ color: "#449bd5" }}
            onPress={() => navigation.navigate("Signup", { name: "Signup" })}
          >
            click here
          </Text>{" "}
          to sign up
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
});
