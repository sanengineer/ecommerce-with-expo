import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FoodLists = () => {
  return (
    <View style={styles.foodContainer}>
      <View style={styles.foodSubContainer}>
        <View style={styles.titleItemDescGroup}>
          <Text style={styles.titleItem}>Avocado Juice</Text>
          <Text style={styles.titleDesc}>Fresh avocado juice 10% water.</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodLists;

const styles = StyleSheet.compose({
  foodContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    minHeight: 100,
    marginBottom: 20,
    borderRadius: 6,
  },
  foodSubContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  titleItem: {
    fontFamily: "CircularStd-Bold",
    fontSize: 20,
  },
  titleDesc: {
    fontFamily: "CircularStd-Book",
    fontSize: 14,
  },
});
