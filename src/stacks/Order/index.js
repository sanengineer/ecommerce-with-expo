import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import {
  AvocadoFruit,
  StrawberryFruit,
  MangoFruit,
  PineappleFruit,
  DragonFruit,
  IconHeartDisable,
  IconTrashGrey,
  IconPlusCircle,
  IconMinusCircle,
} from "../../assets";
import { Space } from "../../components";
import { IconAngleLeftBig } from "../../assets";
import { useScrollToTop } from "@react-navigation/native";

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

const Order = ({ navigation }) => {
  const ref = useRef();
  useScrollToTop(ref);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.firstRowContainer}>
        <View style={styles.titleDescPriceContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Product", item)}
          >
            <Text style={styles.itemPrice}>Rp. {item.price}</Text>
            <Space height={8} />
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Space height={8} />
            <Text style={styles.itemDesc}>{item.desc}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ftImageContainer}>
          <ImageBackground source={item.image} style={styles.ftImage} />
        </View>
      </View>
      <Space height={20} />
      <View style={styles.secondRowContainer}>
        <TouchableOpacity>
          <View style={{ marginHorizontal: 4 }}>
            <IconTrashGrey />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ marginRight: 4 }}>
              <IconMinusCircle />
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 3,
              borderColor: "#cecece",
              borderStyle: "solid",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 8,
                marginHorizontal: 6,
                fontSize: 16,
                fontFamily: "CircularStd-Bold",
              }}
            >
              2
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{ marginLeft: 4 }}>
              <IconPlusCircle />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Space width={30} />
          </View>
          <Text style={styles.textHeaderContainer}>Cart</Text>
          <View>
            <Space width={30} />
          </View>
        </View>
        <FlatList
          ref={ref}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.product_id}
          style={styles.containerFlatlist}
          // ListFooterComponent={footerFlatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  screenContainer: {
    // paddingHorizontal: 20,
    paddingTop: 18,
    flex: 1,
    // backgroundColor: "red",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#e7e7e7",
    // backgroundColor: "cyan",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 4,
  },
  textHeaderContainer: {
    // backgroundColor: "red",
    fontFamily: "CircularStd-Bold",
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
  itemPrice: {
    fontFamily: "CircularStd-Bold",
    fontSize: 18,
  },
  itemTitle: {
    fontFamily: "CircularStd-Bold",
  },
  itemDesc: {
    fontFamily: "CircularStd-Book",
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
