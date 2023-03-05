import { useState } from "react";
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

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitButton = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Password not matched");
      return;
    }
    axios
      .post("https://s2f-backend.onrender.com/api/auth/customer-register", {
        email: email,
        password: password,
        phone_number: phone_number,
      })
      .then((res) => {
        Alert.alert("Signup Successful");
        navigation.navigate("Login", { name: "Login" });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          Alert.alert(err.response.data);
          console.log(err);
        } else {
          Alert.alert("Signup failed");
          console.log(err);
        }
      });
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
          SIGN UP
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
          onChangeText={(text) => setPhoneNumber(text)}
          value={phone_number}
          placeholder=" Phone Number"
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
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          margin: 15,
        }}
      >
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          placeholder=" Confirm Password"
        />
      </View>
      <View style={{ margin: 13 }}>
        <Button onPress={submitButton} title="SIGN UP" />
      </View>
      <View style={{ marginLeft: 35 }}>
        <Text style={{ fontSize: 15 }}>
          Already have an Account?{" "}
          <Text
            style={{ color: "#449bd5" }}
            onPress={() => navigation.navigate("Login", { name: "Login" })}
          >
            click here
          </Text>{" "}
          to login
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
