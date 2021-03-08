import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Router from "./router";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { getData } from "./utils";

function App(props) {
  let [loaded] = useFonts({
    "Montserrat-Regular": Montserrat_400Regular,
    "Montserrat-Medium": Montserrat_500Medium,
    "Montserrat-SemiBold": Montserrat_600SemiBold,
    "Montserrat-Bold": Montserrat_700Bold,
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
