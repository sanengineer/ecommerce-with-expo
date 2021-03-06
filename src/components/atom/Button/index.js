import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const Button = ({
  onPress,
  label = "Button",
  bgColor = "#000",
  padSizeX = 20,
  padSizeY = 20,
  textColor = "#fff",
  txtSize = 20,
  fontFam = "CircularStd-Book",
  txtDecorationLine = "underline",
  txtDecorationStyle = "solid",
  txtAlign = "center",
}) => {
  //
  //debug
  console.log("fontFam:", fontFam);
  console.log("fontFam:", fontFam);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(bgColor, padSizeX, padSizeY)}>
        <Text
          style={styles.title(
            textColor,
            fontFam,
            txtSize,
            txtDecorationStyle,
            txtDecorationLine,
            txtAlign
          )}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.compose({
  title: (
    color,
    fontFam,
    txtSize,
    txtDecorationStyle,
    txtDecorationLine,
    txtAlign
  ) => ({
    color: color,
    fontFamily: fontFam,
    fontSize: txtSize,
    textDecorationStyle: txtDecorationStyle,
    textDecorationLine: txtDecorationLine,
    textAlign: txtAlign,
  }),

  container: (color, sizeX, sizeY) => ({
    backgroundColor: color,
    paddingVertical: sizeX,
    paddingHorizontal: sizeY,
  }),
});
