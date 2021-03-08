import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextField = ({
  textField,
  fontFamily = "Montserrat-Regular",
  fontSize = 14,
}) => {
  return (
    <View>
      <Text style={styles.text(fontFamily, fontSize)}>{textField}</Text>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.compose({
  text: (fontFamily, fontSize) => ({
    fontFamily: fontFamily,
    fontSize: fontSize,
    textAlign: "center",
  }),

  // text : {
  //   fontFamily: "Montserrat-Regular"
  // }
});
