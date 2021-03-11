import React from "react";
import { ImageBackground } from "react-native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  AvocadoFruit,
  StrawberryFruit,
  MangoFruit,
  PineappleFruit,
  DragonFruit,
  IconHeartDisable,
} from "../../assets";
import { IconAngleLeftBig } from "../../assets";
import { IconContainer, Space } from "../../components";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    product_id: 1,
    name: "Double Shoot Iced Shaken Espresso",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 30000,
    stock: 20,
    image: AvocadoFruit,
    num_rate: 10,
  },
  {
    product_id: 2,
    name: "Carramel Machiato - 250ml",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 10,
    image: StrawberryFruit,
    num_rate: 30,
  },
  {
    product_id: 3,
    name: "Caffe Americano - 250ml",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 40,
    image: PineappleFruit,
    num_rate: 20,
  },
  {
    product_id: 4,
    name: "Arabica Whole Beans Light Roast - 100gr",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 22,
    image: MangoFruit,
    num_rate: 12,
  },
  {
    product_id: 5,
    name: "Cold Brew - 250ml",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 16,
    image: DragonFruit,
    num_rate: 12,
  },
  {
    product_id: 6,
    name: "Caffe Americano - 1L",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 18,
    image: DragonFruit,
    num_rate: 14,
  },
  {
    product_id: 7,
    name: "Palm Sugar Coffee Milk - 1L",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 18,
    image: DragonFruit,
    num_rate: 16,
  },
];

const Category = ({ route }) => {
  const navigation = useNavigation();

  //
  //debug
  console.log("navigation Category:", navigation);
  console.log("route Category:", route);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.firstRowContainer}>
        <View style={styles.titleDescPriceContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Product", item)}
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Space height={8} />
            <Text style={styles.itemDesc}>{item.desc}</Text>
            <Space height={8} />
            <Text style={styles.itemPrice}>Rp. {item.price}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ftImageContainer}>
          <ImageBackground source={item.image} style={styles.ftImage} />
        </View>
      </View>
      <Space height={20} />
      <View style={styles.secondRowContainer}>
        <TouchableOpacity>
          <View>
            <IconHeartDisable />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#000",
              paddingVertical: 6,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 12 }}>
              Add
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const footerFlatList = () => (
    <View>
      <Space height={100} />
    </View>
  );

  const numColumns = 1;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconBackContainer}>
              <IconAngleLeftBig />
            </View>
          </TouchableOpacity>
          <Text style={styles.textHeaderContainer}>
            {route.params.category_name}
          </Text>
          <View
            style={{
              paddingHorizontal: 12,
              // backgroundColor: "red"
              position: "relative",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Order")}>
              <View
                style={{
                  zIndex: 2,
                }}
              >
                <Text
                  style={{
                    backgroundColor: "red",
                    position: "absolute",
                    fontSize: 13,
                    top: -10,
                    right: 0,
                    fontFamily: "Montserrat-Bold",
                    color: "#fff",
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  16
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 34 }}>🛒</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          numColumns={numColumns}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.product_id}
          style={styles.containerFlatlist}
          ListFooterComponent={footerFlatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  screenContainer: {
    // paddingHorizontal: 20,
    paddingTop: 18,
    // backgroundColor: "red",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#e7e7e7",
    // backgroundColor: "cyan",
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textHeaderContainer: {
    // backgroundColor: "red",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  textHeaderContainer: {
    // backgroundColor: "red",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  iconBackContainer: {
    padding: 5,
    // backgroundColor: "red",
  },
  containerFlatlist: {
    paddingBottom: 100,
    // backgroundColor: "red",
  },

  itemContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    // backgroundColor: "cyan",
    borderBottomWidth: 1,
    borderBottomColor: "#e7e7e7",
    flexDirection: "column",
    flex: 1,
    //height: Dimensions.get("window").width / numColumns
  },
  firstRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleDescPriceContainer: {
    flex: 1,
    paddingRight: 16,
  },
  itemTitle: {
    fontFamily: "Montserrat-Bold",
  },
  itemDesc: {
    fontFamily: "Montserrat-Regular",
  },
  itemPrice: {
    fontFamily: "Montserrat-SemiBold",
  },
  ftImageContainer: {
    width: 90,
    borderRadius: 10,
    // overflow: "hidden",
  },

  ftImage: {
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 10,
    height: 80,
    justifyContent: "center",
    paddingBottom: 10,
    paddingLeft: 14,
  },
});
