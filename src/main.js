import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Router from "./router";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import { useFonts } from "@expo-google-fonts/montserrat";

import {
  CircularStd_Black,
  CircularStd_Medium,
  CircularStd_Bold,
  CircularStd_Book,
} from "../src/assets";
import { getData } from "./utils";

function App(props) {
  let [loaded] = useFonts({
    "Montserrat-Regular": Montserrat_400Regular,
    "Montserrat-Medium": Montserrat_500Medium,
    "Montserrat-Bold": Montserrat_600SemiBold,
    "Montserrat-Bold": Montserrat_700Bold,
    "CircularStd-Medium": CircularStd_Medium,
    "CircularStd-Book": CircularStd_Book,
    "CircularStd-Bold": CircularStd_Bold,
    "CircularStd-Black": CircularStd_Black,
  });

  const [data, setData] = useState();

  useEffect(() => {
    getData("user").then((user) => {
      console.log("token_home_stack:", user.accessToken);
      setData(user);
    });
  }, []);
  //
  //debug
  console.log("loaded", loaded);
  console.log("props", props);
  console.log("data", data);

  if (!loaded) {
    return (
      <>
        <AppLoading />
      </>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar />
          <Router />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
