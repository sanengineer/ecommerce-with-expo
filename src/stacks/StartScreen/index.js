import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { getData } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StartScreen = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    // getData("user").then((user) => {
    //   setData(user);
    // });

    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("user");

      if (!userData) {
        props.navigation.navigate("LogIn");
      } else {
        props.navigation.navigate("MainApp");
      }
      const transformedData = JSON.parse(userData);
      const { accessToken, userId } = transformedData;

      //
      //debug
      console.log("transformedData:", transformedData);
      console.log("userData:", userData);
      console.log("accessToken:", accessToken);
    };

    tryLogin();
  }, []);
  //
  //debug
  console.log("navigation:", props.navigation);
  console.log("props", props);
  console.log("data:", data);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
