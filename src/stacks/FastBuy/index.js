import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { IconAngleLeftBig, StarEnable } from "../../assets";
import { Space } from "../../components";

const FastBuy = ({ navigation, route }) => {
  //
  //debug
  console.log("navigation Category:", navigation);
  console.log("route Category:", route);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconBackContainer}>
              <IconAngleLeftBig />
            </View>
          </TouchableOpacity>
          <Text style={styles.textHeaderContainer}>⚡ Fast Buy</Text>
          <View>
            <Space width={30} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FastBuy;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  screenContainer: {
    // paddingHorizontal: 20,
    paddingTop: 18,
    // backgroundColor: "red",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#e7e7e7",
    // backgroundColor: "cyan",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  textHeaderContainer: {
    // backgroundColor: "red",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
});
