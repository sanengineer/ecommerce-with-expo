import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  LogIn,
  Profile,
  Register,
  SuccessRegister,
  Order,
  Home,
  SuccessLogin,
  Search,
  StartScreen,
  Bio,
  Shipping,
} from "../stacks";
import { BottomNav } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="SuccessLogin"
        component={SuccessLogin}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="SuccessRegister"
        component={SuccessRegister}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Bio"
        component={Bio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
