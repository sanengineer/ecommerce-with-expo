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
  Security,
  Category,
  Product,
} from "../stacks";
import { BottomNav } from "../components";

const categories = [
  {
    category_id: 1,
    category_name: "Fashion Tops",
  },
  {
    category_id: 2,
    category_name: "Fashion Bottoms",
  },
  {
    category_id: 3,
    category_name: "Fashion Outter",
  },
  {
    category_id: 4,
    category_name: "Shoes",
  },
  {
    category_id: 5,
    category_name: "Accessoris",
  },
  {
    category_id: 6,
    category_name: "Beverage",
  },
];
const products = [
  {
    product_id: 1,
    product_name: "Double Shoot Iced Shaken Espresso",
  },
  {
    product_id: 2,
    product_name: "Carramel Machiato - 250ml",
  },
  {
    product_id: 3,
    product_name: "Caffe Americano - 250ml",
  },
  {
    product_id: 4,
    product_name: "Arabica Whole Beans Light Roast - 100gr",
  },
  {
    product_id: 5,
    product_name: "Cold Brew - 250ml",
  },
  {
    product_id: 6,
    product_name: "Caffe Americano - 1L",
  },
  {
    product_id: 7,
    product_name: "Palm Sugar Coffee Milk - 1L",
  },
];

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
        name="Security"
        component={Security}
        options={{ headerShown: false }}
      />
      {/* {categories.map((nav) => (
        <Stack.Screen
          name={nav.category_name}
          component={Category}
          key={nav.category_id}
          // initialParams={nav.category_id}
        />
      ))} */}

      {/* {products.map((nav) => (
        <Stack.Screen
          name={nav.product_name}
          component={Product}
          key={nav.product_id}
        />
      ))} */}

      <Stack.Screen
        name={"Category"}
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Product"}
        component={Product}
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
