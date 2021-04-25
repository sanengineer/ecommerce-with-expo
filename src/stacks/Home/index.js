import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  ShoesImage,
  AvocadoFruit,
  StrawberryFruit,
  MangoFruit,
  PineappleFruit,
  DragonFruit,
  StarEnable,
  CoffeeCup,
  ImageHeaderBg,
} from "../../assets";

import {
  ImageSlider,
  ListText,
  Space,
  ImageSliderFlatList,
} from "../../components";
import { getData } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { whoAmiAction } from "../../redux/actions/whoAmiAction";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

//
//debug
console.log("window:", window);
console.log("screen:", screen);

const data = [
  {
    product_id: 1,
    name: "Double Shoot Iced Shaken Espresso",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 30000,
    stock: 20,
    image: CoffeeCup,
    // num_rate: 10,
  },
  {
    product_id: 2,
    name: "Carramel Machiato - 250ml",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 10,
    image: CoffeeCup,
    // num_rate: 30,
  },
  {
    product_id: 3,
    name: "Caffe Americano - 250ml",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 40,
    image: CoffeeCup,
    // num_rate: 20,
  },
  {
    product_id: 4,
    name: "Arabica Whole Beans Light Roast - 100gr",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 22,
    image: CoffeeCup,
    // num_rate: 12,
  },
  {
    product_id: 5,
    name: "Cold Brew - 250ml",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 16,
    image: CoffeeCup,
    // num_rate: 12,
  },
  {
    product_id: 6,
    name: "Caffe Americano - 1L",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    // num_rate: 14,
  },
  {
    product_id: 7,
    name: "Palm Sugar Coffee Milk - 1L",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    // num_rate: 16,
  },
  {
    product_id: 8,
    name: "Palm Sugar Coffee Milk - 1L",
    desc: "Espresso based with 80% milk and 20% espresso coffee",
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    // num_rate: 16,
  },
];

const categories = [
  {
    category_id: 1,
    category_name: "☕️  Coffee",
    featured_image: ShoesImage,
  },
  {
    category_id: 2,
    category_name: "🥃  Tea",
    featured_image: AvocadoFruit,
  },
  {
    category_id: 3,
    category_name: "🍵  Matcha",
    featured_image: StrawberryFruit,
  },
  {
    category_id: 4,
    category_name: "🥐  Pastry",
    featured_image: MangoFruit,
  },
];

const numColumns = 2;

const Home = () => {
  const [token, setToken] = useState();
  const ref = useRef();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const error = useSelector((state) => state.who_ami_reducer);
  const avaImg = useSelector((state) => state.who_ami_reducer.who_ami.avatar);

  useScrollToTop(ref);

  const getToken = async () => {
    await getData("user").then((user) => {
      console.log("token_home_stack:", user.accessToken);
      dispatch(whoAmiAction(user.accessToken));
      setToken(user.accessToken);
    });
  };

  const FlatListHeaderHome = () => (
    <View style={styles.container}>
      <ScrollView
        style={styles.foodListsContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.screen}>
          {/* <View style={styles.carrouselContainer}>
            <ImageSliderFlatList />
          </View> */}

          <ImageBackground
            style={styles.headerContainer}
            source={ImageHeaderBg}
          >
            <View style={styles.titleHeaderContainer}>
              <View style={styles.iconTitleUserContainer}>
                <Text style={styles.iconTitle}>👋</Text>
                <Text style={styles.textTitle}>Hai, San!</Text>
              </View>

              <Text
                style={{
                  fontFamily: "CircularStd-Book",
                  fontSize: 18,
                  // backgroundColor: "red",
                  textAlign: "center",
                }}
              >
                Ayo pesan lagi !
              </Text>
            </View>
            <Space height={10} />

            <View
              style={{
                // backgroundColor: "red",

                top: -Dimensions.get("screen").height / 5,
              }}
            >
              <TouchableOpacity
                style={{
                  opacity: 0.6,
                }}
                // onPress={() => navigation.navigate("Category", item)}
              >
                <View
                  style={{
                    width: 170,
                    backgroundColor: "green",
                    borderRadius: 100,
                  }}
                >
                  <ListText
                    paddingX={0}
                    paddingY={4}
                    text={"💰 Point Kamu"}
                    size={10}
                    color={"#fff"}
                    style={{ justifyContent: "center" }}
                  />
                </View>
              </TouchableOpacity>
              {/* <Space height={7} /> */}
              <Text
                style={{
                  fontSize: 60,
                  textAlign: "center",
                  fontFamily: "CircularStd-Medium",
                }}
              >
                2000
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                height: Dimensions.get("screen").height / 5,
                position: "absolute",
                width: Dimensions.get("screen").width - 36,
                top: Dimensions.get("screen").height / 2.6,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#efefef",
                marginHorizontal: 18,
                zIndex: 4,
              }}
            ></View>
          </ImageBackground>
          <Space height={Dimensions.get("screen").height / 40} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: Dimensions.get("screen").height / 10 }}
          >
            <View style={{ flexDirection: "row", paddingHorizontal: 18 }}>
              {categories.map((item) => (
                <>
                  <View
                    style={{
                      borderColor: "#efefef",
                      borderWidth: 1,
                      // backgroundColor: "red",
                      borderRadius: 6,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        // backgroundColor: "red",
                        borderRadius: 6,
                      }}
                      onPress={() => navigation.navigate("Category", item)}
                    >
                      <View style={{ paddingHorizontal: 12 }}>
                        <ListText
                          text={`${item.category_name}`}
                          style={{ justifyContent: "center", fontSize: 16 }}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <Space width={20} />
                </>
              ))}
            </View>
          </ScrollView>

          <Space height={10} />
        </View>
      </ScrollView>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Product", item)}
      >
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Space height={12} />
          <Text style={styles.itemTextPrice}>Rp. {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    getToken();
  }, []);

  const email = useSelector((state) => state.authLoginReducer.auth_form.email);
  //
  //debug
  console.log("email:", email);
  console.log("error:", error);
  console.log("token_home:", token);
  // console.log("avatar:", avatar);
  console.log("avaImg:", avaImg);
  console.log("dimension:", styles.image);

  return (
    <View style={{ backgroundColor: "green" }}>
      <FlatList
        ref={ref}
        // data={formatData(data, numColumns)}
        data={data}
        // style={styles.containerFlatlist}
        renderItem={renderItem}
        numColumns={numColumns}
        keyExtractor={(item, index) => item.product_id}
        ListHeaderComponent={FlatListHeaderHome}
        columnWrapperStyle={styles.containerFlatlist}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screen: {
    flex: 1,
    // backgroundColor: "red",
  },
  containerProduct: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "aqua",
    alignItems: "center",
    padding: 10,
  },
  subContainerProduct: {
    paddingHorizontal: 12,
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: "#fff",
  },
  containerList: {
    // flex: 1,
    flexDirection: "column",
    backgroundColor: "yellow",
  },
  subContainerList: {
    alignContent: "stretch",
    // backgroundColor: "red",
    padding: 6,
  },

  homeHeader: {
    fontSize: 26,
    fontFamily: "CircularStd-Bold",
    marginRight: 20,
  },

  carrouselContainer: {
    flexDirection: "row",
  },

  headerContainer: {
    flex: 1,
    alignItems: "center",
    height: Dimensions.get("screen").height / 2,
    backgroundColor: "#17F147",
    position: "relative",
    resizeMode: "cover",
  },

  titleHeaderContainer: {
    position: "relative",
    justifyContent: "center",
    top: -Dimensions.get("screen").height / 13,
    flex: 1,
    // flexDirection: "column",
    // backgroundColor: "red",
  },

  iconTitleUserContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  iconTitle: {
    fontSize: 36,
  },
  textTitle: { fontSize: 32, fontFamily: "CircularStd-Bold" },

  // image: {
  //   flex: 1,
  //   justifyContent: "center",
  //   resizeMode: "cover",
  //   height: 380,
  // },

  foodListsContainer: {
    // backgroundColor: "red",
  },

  //
  //FlatList
  containerFlatlist: {
    flex: 1,
    marginVertical: 0,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },

  itemContainer: {
    // backgroundColor: "grey",
    overflow: "hidden",
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: "#efefef",
    borderStyle: "solid",
    borderWidth: 1,
  },

  item: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: "red",
  },
  itemText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "CircularStd-Book",
    lineHeight: 20,
  },

  itemTextPrice: {
    fontSize: 16,
    fontFamily: "CircularStd-Bold",
  },

  itemImage: {
    height: 120,
    width: Dimensions.get("window").width / numColumns,
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
    fontFamily: "CircularStd-Book",
    color: "#979797",
  },
});
