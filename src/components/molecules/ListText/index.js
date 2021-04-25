import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListText = ({
  text,
  color = "black",
  size = 16,
  paddingX = 10,
  paddingY = 6,
}) => {
  return (
    <View style={styles.listTextContainer(paddingX, paddingY)}>
      <Text style={styles.text(color, size)}>{text}</Text>
    </View>
  );
};

export default ListText;

const styles = StyleSheet.compose({
  listTextContainer: (paddingX, paddingY) => ({
    paddingVertical: paddingY,
    paddingHorizontal: paddingX,
    // borderColor: "#cecece",
    // borderWidth: 1,
    // borderStyle: "solid",

    justifyContent: "center",
    // backgroundColor: "red",
  }),

  text: (color, size) => ({
    fontFamily: "CircularStd-Book",
    fontSize: size,
    color: color,
    textAlign: "center",
  }),
});
