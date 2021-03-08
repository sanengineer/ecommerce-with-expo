import React from "react";
import { StyleSheet, View } from "react-native";

const IconContiner = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default IconContiner;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
