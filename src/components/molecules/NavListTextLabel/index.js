import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Space } from "../../atom";

const NavListTextLabel = ({ label, content, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Bio")}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgba(151, 151, 151, 0.1)" : "white",
        },
      ]}
    >
      <View style={styles.listSubContainer}>
        <View style={styles.listIconNameContainer}>
          <View style={styles.container}>
            <View style={styles.labelContainer}>
              {label === "Email" ? (
                <>
                  <Text style={styles.label}>{label}</Text>
                  <Space width={8} />
                  <View style={styles.statusVerifiedContainer}>
                    <Text style={styles.statusVerified}>Verified</Text>
                  </View>
                </>
              ) : (
                <Text style={styles.label}>{label}</Text>
              )}
            </View>
            <Space height={10} />
            <Text style={styles.content}>{content}</Text>
          </View>
        </View>
        <View style={styles.editContainer}>
          <Text style={styles.editText}>Edit</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default NavListTextLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  content: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#000",
    // backgroundColor: "red",
    borderStyle: "solid",
    borderColor: "#dddddd",
  },

  editContainer: {
    justifyContent: "center",
  },
  editText: {
    color: "green",
    fontFamily: "Montserrat-Bold",
  },

  listSubContainer: {
    paddingBottom: 80,
  },
  listSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 50,
    paddingHorizontal: 18,
    paddingVertical: 18,
    // backgroundColor: "cyan",
  },

  statusVerifiedContainer: {
    backgroundColor: "#85FF83",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 4,
  },
  statusVerified: {
    fontSize: 10,
    fontFamily: "Montserrat-Bold",
    color: "#038C00",
  },
});
