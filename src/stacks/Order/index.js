import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Order = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text>Order Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  page: {
    paddingHorizontal: 18,
    paddingTop: 30,
    paddingBottom: 10,
  },
});
