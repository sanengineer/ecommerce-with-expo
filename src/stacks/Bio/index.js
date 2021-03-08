import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { IconAngleLeftBig } from "../../assets";
import { NavListTextLabel, Space } from "../../components";
import { useSelector } from "react-redux";

const Bio = ({ navigation }) => {
  const whoami = useSelector((state) => state.who_ami_reducer.who_ami);
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
        <ScrollView
          style={styles.subScreenContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flexDirection: "column", paddingBottom: 80 }}>
            <View style={styles.avaContainer}>
              <Image source={{ uri: whoami.avatar }} style={styles.avatar} />
            </View>

            <NavListTextLabel
              label="Username"
              content={whoami.username}
              navigation={navigation}
            />
            <NavListTextLabel
              label="Email"
              content={whoami.email}
              navigation={navigation}
            />
            <NavListTextLabel
              label="Firstname"
              content={whoami.firstname}
              navigation={navigation}
            />
            <NavListTextLabel
              label="Lastname"
              content={whoami.lastname}
              navigation={navigation}
            />
            <NavListTextLabel
              label="Gender"
              content={whoami.gender}
              navigation={navigation}
            />
            <NavListTextLabel
              label="Birthdate"
              content={whoami.birthdate}
              navigation={navigation}
            />
          </View>
        </ScrollView>
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
    paddingTop: 18,
    // backgroundColor: "red",
  },
  subScreenContainer: {
    paddingBottom: 80,
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
  avatar: {
    borderRadius: 38,
    width: 100,
    height: 100,
  },
  avaContainer: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 30,
  },
  listIconNameContainer: {
    flexDirection: "row",
    // backgroundColor: "green",
  },
});
