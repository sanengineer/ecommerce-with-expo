import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Text>Search Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  page: {
    paddingHorizontal: 18,
    paddingTop: 30,
    paddingBottom: 10,
  },
});
