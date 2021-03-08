import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { IconAngleLeftBig } from "../../assets";
import { Space } from "../../components";

const Bio = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconAngleLeftBig />
          </TouchableOpacity>
          <Text style={styles.textHeaderContainer}>Bio</Text>
          <View>
            <Space width={30} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bio;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screenContainer: {
    // paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#dddddd",
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
