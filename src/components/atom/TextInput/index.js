import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputReact,
} from "react-native";

const TextInput = ({ label, placeholder, ...props }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputReact
        style={styles.input}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.compose({
  label: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000",
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dddddd",
  },
});
