import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
  StatusBar,
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { IconAngleLeftBig } from "../../assets";
import { Space } from "../../components";
import { Touchable } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  screenContainer: {
    paddingTop: 18,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#e7e7e7",
    // backgroundColor: "cyan",
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textHeaderContainer: {
    // backgroundColor: "red",
    fontFamily: "CircularStd-Bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  iconBackContainer: {
    padding: 5,
    // backgroundColor: "red",
  },
  tabViewContainer: {
    // backgroundColor: "red",
  },
  scene: {
    flex: 1,
  },
});

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <Text>Notification</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]}>
    <Text>Inbox</Text>
  </View>
);

const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#000" }}
    style={{ backgroundColor: "transparent" }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color: focused ? "black" : "grey",
          padding: 8,
          fontFamily: focused ? "CircularStd-Bold" : "CircularStd-Book",
          fontSize: 14,
          width: 130,
          textAlign: "center",
          //   backgroundColor: "red",
        }}
      >
        {focused ? `${route.emoji + " " + route.title}` : `${route.title}`}
      </Text>
    )}
  />
);

const Notification = ({ route }) => {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Notification", emoji: "🔔" },
    { key: "second", title: " Message", emoji: "📨" },
  ]);

  //debug
  console.log("NAVIGATION NOTIFICATION:", navigation);
  console.log("ROUTE NOTIFICATION:", route);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconBackContainer}>
              <IconAngleLeftBig />
            </View>
          </TouchableOpacity>
          <Text style={styles.textHeaderContainer}>{route.name}</Text>
          <View>
            <Space width={34} />
          </View>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabViewContainer}
      />
    </SafeAreaView>
  );
};

export default Notification;
