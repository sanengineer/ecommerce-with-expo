import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native";
import { Header, TextInput, Button, Space, TextField } from "../../components";
import { KeyboardScrollUpForms } from "../../utils";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log(
      "\n",
      "---------------",
      "\n",
      "username:",
      username,
      "\n",
      "email:",
      email,
      "\n",
      "password:",
      password,
      "\n",
      "---------------"
    );
  };

  //
  //debug
  console.log("username:", username);
  console.log("email:", email);
  console.log("password:", password);

  return (
    <View style={styles.page}>
      <KeyboardScrollUpForms
        enabled
        behavior={
          Platform.OS == "ios" &&
          Platform.OS == "android" &&
          Platform.OS == "web"
            ? "padding"
            : "height"
        }
      >
        <Space height={20} />
        <Header title="Register" desc="More benefit being member." />

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.container}>
            <View style={styles.avatar}>
              <View style={styles.avaBorder}>
                <View style={styles.avaContainer}>
                  <Text style={styles.addAva}>Add Avatar</Text>
                </View>
              </View>
            </View>
            <TextInput
              label="Username"
              placeholder="juice100"
              value={username}
              onChangeText={(e) => setUsername(e)}
            />
            <Space height={30} />
            <TextInput
              label="Email"
              placeholder="fruit@email.com"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
            <Space height={30} />
            <TextInput
              label="Password"
              placeholder="********"
              value={password}
              onChangeText={(e) => setPassword(e)}
              secureTextEntry
            />
            <Space height={50} />
            <Button
              label="Register"
              txtDecorationLine="none"
              fontFam="CircularStd-Bold"
              // onPress={() => navigation.replace("SuccessRegister")}
              onPress={() => onSubmit()}
            />
            <Space height={20} />
            <TextField textField="Have An Account?" />
            <Button
              onPress={() => navigation.navigate("LogIn")}
              label="Login Please"
              txtSize={12}
              bgColor="#fff"
              textColor="#000"
              fontFam="CircularStd-Bold"
            />
          </View>
        </ScrollView>
      </KeyboardScrollUpForms>
    </View>
  );
};

export default Register;

const styles = StyleSheet.compose({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 0,
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  addAva: {
    fontSize: 16,
    fontFamily: "CircularStd-Bold",
    color: "#fff",
    textAlign: "center",
  },
  avaBorder: {
    borderRadius: 110,
    height: 110,
    width: 110,
    borderStyle: "solid",
    borderColor: "#dedede",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avaContainer: {
    borderRadius: 90,
    height: 90,
    width: 90,
    backgroundColor: "#dedede",
    padding: 10,
    justifyContent: "center",
  },
  avatar: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
});
