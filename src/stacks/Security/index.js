import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconAngleLeftBig } from "../../assets";
import { Space, TextInput } from "../../components";
import { DismissKeyboard, KeyboardScrollUpForms, useForm } from "../../utils";

const Security = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <DismissKeyboard>
        <KeyboardScrollUpForms
          enabled
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconAngleLeftBig />
              </TouchableOpacity>
              <Text style={styles.textHeaderContainer}>Security</Text>
              <Space width={30} />
            </View>
            <ScrollView>
              <View style={styles.mainContianer}>
                <Space height={20} />
                <TextInput
                  label="Last Password"
                  placeholder="type here..."
                  secureTextEntry
                />
                <Space height={20} />
                <TextInput
                  label="New Password"
                  placeholder="type here..."
                  secureTextEntry
                />
                <Space height={20} />
                <TextInput
                  label="Confirm New Password"
                  placeholder="type here..."
                  secureTextEntry
                />
              </View>
            </ScrollView>
          </View>
          <Space height={40} />
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  //   backgroundColor: "red",
                  width: 120,
                  padding: 30,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat-Bold",
                    color: "green",
                    fontSize: 16,
                  }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardScrollUpForms>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default Security;

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
  mainContianer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titleMain: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
});
