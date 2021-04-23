import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Header, Space, TextField, TextInput } from "../../components";
import { DismissKeyboard, KeyboardScrollUpForms, useForm } from "../../utils";

import { authLoginAction } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { UserServices } from "../../services";
import { storeData } from "../../utils";

const LogIn = ({ navigation }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const data_form = useSelector((state) => state);

  //
  //debug
  // console.log("dispatch:", dispatch);
  // console.log("data_form:", data_form);

  const onSubmit = () => {
    // console.log(
    //   "\n",
    //   "---------------",
    //   "\n",
    //   "form:",
    //   form,
    //   "---------------"
    // );
    dispatch(authLoginAction(form, navigation));
  };

  //
  //debug
  // console.log("email:", email);
  // console.log("password:", password);

  return (
    <DismissKeyboard>
      <View style={styles.page}>
        <KeyboardScrollUpForms
          enabled
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Space height={20} />
          <Header title="Login" desc="For buying healty juice, login first." />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.container}>
              <TextInput
                label="Email"
                placeholder="juice@foryou.com"
                value={form.email}
                onChangeText={(value) => setForm("email", value)}
              />
              <Space height={30} />
              <TextInput
                label="Password"
                placeholder="********"
                value={form.password}
                onChangeText={(value) => setForm("password", value)}
                secureTextEntry
              />
              <Space height={50} />
              <Button
                label="Login"
                fontFam="CircularStd-Bold"
                txtDecorationLine="none"
                // onPress={() => navigation.replace("SuccessLogin")}
                onPress={() => onSubmit()}
              />
              <Space height={30} />
              <TextField textField="Don't Have An Account?" />
              <Button
                onPress={() => navigation.navigate("Register")}
                label="Create Account"
                txtSize={12}
                bgColor="#fff"
                textColor="#000"
                fontFam="CircularStd-Bold"
              />
            </View>
          </ScrollView>
        </KeyboardScrollUpForms>
      </View>
    </DismissKeyboard>
  );
};

export default LogIn;

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
});
