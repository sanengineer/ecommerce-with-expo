import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Space } from "../../components";
import {
  ShoesImage,
  AvocadoFruit,
  StrawberryFruit,
  MangoFruit,
  PineappleFruit,
  DragonFruit,
} from "../../assets";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    query_id: 0,
    query: "latte",
  },
  {
    query_id: 1,
    query: "tea",
  },
  {
    query_id: 2,
    query: "beans",
  },
  {
    query_id: 3,
    query: "shoes",
  },
  {
    query_id: 4,
    query: "watch",
  },
  {
    query_id: 5,
    query: "strap",
  },
  {
    query_id: 6,
    query: "double shot",
  },
  {
    query_id: 7,
    query: "t-shirt",
  },
  {
    query_id: 8,
    query: "mask",
  },
];

const categories = [
  {
    category_id: 1,
    category_name: "Fashion Tops",
    featured_image: ShoesImage,
  },
  {
    category_id: 2,
    category_name: "Fashion Bottoms",
    featured_image: AvocadoFruit,
  },
  {
    category_id: 3,
    category_name: "Fashion Outter",
    featured_image: StrawberryFruit,
  },
  {
    category_id: 4,
    category_name: "Shoes",
    featured_image: MangoFruit,
  },
  {
    category_id: 5,
    category_name: "Accessoris",
    featured_image: PineappleFruit,
  },
  {
    category_id: 6,
    category_name: "Beverage",
    featured_image: DragonFruit,
  },
];

const numColumns = 2;

const FlatListHeaderHome = () => (
  <>
    <Space height={16} />
    <View style={styles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Top Search</Text>
      </View>
      <Space height={14} />
      <Text>
        <QueryMap data={data} />
      </Text>
    </View>
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Our Products</Text>
    </View>
  </>
);

const FlatListFooterHome = () => (
  <View style={styles.flatListFooter}>
    <Space height={100} />
  </View>
);

const QueryMap = ({ data }) => {
  const listData = (item) => {
    return (
      <TouchableOpacity activeOpacity={0.7} key={item.query_id}>
        <View
          style={{
            paddingRight: 14,
            paddingBottom: 14,
            // backgroundColor: "red"
          }}
        >
          <View
            style={{
              // backgroundColor: "red",
              paddingHorizontal: 14,
              paddingVertical: 8,
              justifyContent: "center",
              borderRadius: 5,
              borderColor: "#e7e7e7",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                // backgroundColor: "cyan",
                fontFamily: "Montserrat-SemiBold",
                textAlign: "center",
              }}
            >
              {item.query}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const collectionData = data.map((item) => listData(item));

  return <>{collectionData}</>;
};

const Search = () => {
  //
  //debug
  // console.log("navigation:", navigation);
  const navigation = useNavigation();

  const ProductList = ({ item }) => (
    <>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          // onPress={() => navigation.navigate(`${item.category_name}`, item)}
          onPress={() => navigation.navigate("Category", item)}
        >
          <View style={styles.ftImageContainer}>
            <ImageBackground
              source={item.featured_image}
              style={styles.ftImage}
            />
          </View>
          <Space height={6} />
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.category_name}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text></Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <View style={styles.sectionContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Search</Text>
          </View>
          <Space height={14} />
          <View style={styles.searchInputContainer}>
            <TextInput style={styles.searchInput} placeholder="type here..." />
          </View>
        </View>
        <FlatList
          numColumns={numColumns}
          data={categories}
          ListHeaderComponent={FlatListHeaderHome}
          ListFooterComponent={FlatListFooterHome}
          renderItem={ProductList}
          keyExtractor={(item) => item.category_id}
          columnWrapperStyle={styles.containerFlatlist}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 20 },
  page: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerContainer: {
    // backgroundColor: "red",
  },
  headerTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  searchInputContainer: {
    backgroundColor: "#f1f1f1",
    padding: 4,
    borderRadius: 6,
  },
  searchInput: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    // backgroundColor: "blue",
    color: "#000",
    padding: 6,
  },
  sectionContainer: { marginBottom: 6 },
  containerFlatlist: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: -10,
    // backgroundColor: "red",
  },

  itemContainer: {
    // backgroundColor: "cyan",
    margin: 10,
    flex: 1,
  },
  ftImageContainer: { overflow: "hidden", borderRadius: 16 },
  ftImage: {
    flex: 1,
    resizeMode: "cover",
    height: 120,
    justifyContent: "center",
    paddingBottom: 10,
    paddingLeft: 14,
  },

  item: {
    // backgroundColor: "red",
    justifyContent: "center",
  },
  itemTitle: {
    // backgroundColor: "cyan",
    fontFamily: "Montserrat-SemiBold",
    textAlign: "left",
    textTransform: "capitalize",
  },

  flatListFooter: {
    // backgroundColor: "cyan",
  },
});
