import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextField, Space, Button } from "../../components";

const SuccessLogin = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.emoji}>🎉</Text>
        <TextField
          textField="Login Success"
          fontFamily="CircularStd-Bold"
          fontSize={25}
        />
        <Space height={10} />
        <TextField
          textField="Grab Your Juices, Now!"
          fontFamily="CircularStd-Medium"
          fontSize={15}
        />
        <Space height={20} />
        <Button
          fontFam="CircularStd-Bold"
          txtSize={18}
          label="Let's Roll!"
          bgColor="transparent"
          textColor="#000"
          onPress={() => navigation.replace("MainApp")}
        />
      </View>
    </View>
  );
};

export default SuccessLogin;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 140,
    textAlign: "center",
    paddingBottom: 50,
  },
});
