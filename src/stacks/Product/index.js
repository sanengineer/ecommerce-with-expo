import React from "react";
import { ImageBackground } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconAngleLeftBig, StarEnable } from "../../assets";
import { Space } from "../../components";

const Product = ({ navigation, route }) => {
  //
  //debug
  console.log("navigation Category:", navigation);
  console.log("route Category:", route);

  const product = route.params;

  console.log("route params", product);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconBackContainer}>
              <IconAngleLeftBig />
            </View>
          </TouchableOpacity>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="search here..."
            />
          </View>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.productContainer}>
            <View style={styles.ftImageContainer}>
              <ImageBackground style={styles.ftImage} source={product.image} />
            </View>
            <View style={styles.titleDescPriceContainer}>
              <View style={styles.footerInfoProdContainer}>
                <Text style={styles.price}>Rp. {product.price}</Text>
                <View style={styles.stockContainer}>
                  <Text style={styles.stock}>stock: {product.stock}</Text>
                </View>
              </View>
              <Space height={8} />
              <Text style={styles.title}>{product.name}</Text>
              <Space height={8} />
              <Text style={styles.desc}>{product.desc}.</Text>
              <Space height={8} />
              <View style={styles.itemRateContainer}>
                <View style={styles.itemStars}>
                  <View style={styles.itemStar}>
                    <StarEnable />
                  </View>
                  <View style={styles.itemStar}>
                    <StarEnable />
                  </View>
                  <View style={styles.itemStar}>
                    <StarEnable />
                  </View>
                  <View style={styles.itemStar}>
                    <StarEnable />
                  </View>
                  <View style={styles.itemStar}>
                    <StarEnable />
                  </View>
                </View>
                <Space width={10} />
                <Text style={styles.itemNumRate}>({product.num_rate})</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.navProductScreen}>
          <View style={styles.navProductScreenContainer}>
            <TouchableOpacity style={styles.fastBuyContainerTouch}>
              <View style={styles.fastBuyContainer}>
                <Text style={styles.fastBuy}>⚡ Fast Buy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addCartContainerTouch}>
              <View style={styles.addCartContainer}>
                <Text style={styles.addCart}>🛒 Add Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={styles.safeContainer}>
  //     <View style={styles.screenContainer}>
  //       <Text>Product Page</Text>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default Product;

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
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  searchInputContainer: {
    backgroundColor: "#f1f1f1",
    padding: 4,
    borderRadius: 6,
    flex: 1,
    marginRight: 2,
  },
  searchInput: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    // backgroundColor: "blue",
    color: "#000",
    padding: 6,
  },
  iconBackContainer: {
    padding: 5,
    // backgroundColor: "red",
  },
  productContainer: {
    marginBottom: 90,
  },
  ftImage: {
    height: Dimensions.get("window").height / 2,
  },
  titleDescPriceContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  desc: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  price: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
  },
  footerInfoProdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemRateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  itemStar: {
    paddingRight: 2,
  },
  itemStars: {
    flexDirection: "row",
  },
  itemNumRate: {
    fontFamily: "Montserrat-Regular",
    color: "#979797",
  },
  stockContainer: {
    // backgroundColor: "red",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.4,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#cecece",
  },
  stock: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  navProductScreen: {
    position: "absolute",
    bottom: 0,
    minHeight: 60,
    borderTopColor: "#e7e7e7",
    borderTopWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  navProductScreenContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  fastBuyContainerTouch: {
    // backgroundColor: "cyan",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  addCartContainerTouch: {
    // backgroundColor: "cyan",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  fastBuyContainer: {
    // backgroundColor: "cyan",
  },
  addCartContainer: {
    // backgroundColor: "red" ,
  },
  fastBuy: {
    fontFamily: "Montserrat-Bold",
  },
  addCart: {
    fontFamily: "Montserrat-Bold",
    color: "#000",
  },
});
