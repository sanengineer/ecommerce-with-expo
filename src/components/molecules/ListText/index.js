import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListText = ({ text, color = "black" }) => {
  return (
    <View style={styles.listTextContainer}>
      <Text style={styles.text(color)}>{text}</Text>
    </View>
  );
};

export default ListText;

const styles = StyleSheet.compose({
  listTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    // borderColor: "#cecece",
    // borderWidth: 1,
    // borderStyle: "solid",

    justifyContent: "center",
    // backgroundColor: "red",
  },

  text: (color) => ({
    fontFamily: "CircularStd-Book",
    fontSize: 16,
    color: color,
    textAlign: "center",
  }),
});
