import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  VirtualizedList,
  FlatList,
  Dimensions,
} from "react-native";
import {
  ImageProfileDummy,
  ShoesImage,
  AvocadoFruit,
  StrawberryFruit,
  MangoFruit,
  PineappleFruit,
  DragonFruit,
  StarEnable,
  StarDisable,
} from "../../assets";
import { FoodLists, ListText, Space } from "../../components";
import { getData } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { whoAmiAction } from "../../redux/actions/whoAmiAction";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

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

const Home = () => {
  // const user = getData("user");
  const [token, setToken] = React.useState();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const error = useSelector((state) => state.who_ami_reducer);
  const avaImg = useSelector((state) => state.who_ami_reducer.who_ami.avatar);

  // const [avatar, setAvatar] = useState();

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
          <View style={styles.carrouselContainer}>
            <Image source={ShoesImage} style={styles.image} />
          </View>
          <Space height={20} />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", paddingHorizontal: 18 }}>
              {categories.map((item) => (
                <>
                  <View
                    style={{
                      // paddingVertical: 0,
                      // paddingHorizontal: 20,
                      borderColor: "#cecece",
                      borderWidth: 1,
                      // backgroundColor: "red",
                      borderRadius: 6,
                    }}
                    key={item.category_id}
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
                          style={{ justifyContent: "center" }}
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
    // if (item.empty === true) {
    //   return <View style={[styles.item, styles.itemInvisible]} />;
    // }
    // return (
    // <TouchableOpacity key={item.product_id}>
    <View style={styles.itemContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Product", item)}
      >
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Space height={6} />
          <Text style={styles.itemTextPrice}>Rp. {item.price}</Text>
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
            <Text style={styles.itemNumRate}>({item.num_rate})</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    // </TouchableOpacity>
  );

  useEffect(() => {
    // user
    //   .then((res) => {
    //     setToken(res.accessToken.accessToken);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // });
    // token();
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

  return (
    <FlatList
      // data={formatData(data, numColumns)}
      data={data}
      // style={styles.containerFlatlist}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={(item) => item.product_id}
      ListHeaderComponent={FlatListHeaderHome}
      columnWrapperStyle={styles.containerFlatlist}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    // backgroundColor: "red",
  },
  containerProduct: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "aqua",
    alignItems: "center",
    padding: 10,
  },
  subContainerProduct: {
    paddingHorizontal: 12,
    flex: 1,
    flexWrap: "wrap",
    // flexDirection: "row",
    // backgroundColor: "cyan",
  },
  containerList: {
    // flex: 1,
    flexDirection: "column",
    // backgroundColor: "yellow",
  },
  subContainerList: {
    alignContent: "stretch",
    // backgroundColor: "red",
    // flex: 1,
    // flexDirection: "column",
    // minWidth: 100,
    // width: 120,
    padding: 6,
  },

  homeHeader: {
    fontSize: 26,
    fontFamily: "Montserrat-Bold",
    // width: 200,
    marginRight: 20,
  },

  carrouselContainer: {
    // minHeight: 200,
    // height: 250,
    // flex: 1,
    flexDirection: "row",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    height: 280,
  },

  foodListsContainer: {
    // marginBottom: 100,
  },

  //
  //FlatList
  containerFlatlist: {
    flex: 1,
    marginVertical: 0,
    // paddingHorizontal: 10,
    marginHorizontal: 8,
    // padding: 20,
    // backgroundColor: "cyan",
  },

  itemContainer: {
    // backgroundColor: "grey",
    // alignItems: "center",
    // justifyContent: "center",
    overflow: "hidden",
    flex: 1,
    // margin: 3,
    margin: 10,
    borderRadius: 10,
    borderColor: "#cecece",
    borderStyle: "solid",
    borderWidth: 1,
    //height: Dimensions.get("window").width / numColumns, // approximate a square
    //height: 380 / numColumns, // approximate a square
  },

  item: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: "red",
    //height: Dimensions.get("window").width / numColumns
  },
  // itemInvisible: {
  //   backgroundColor: "transparent",
  // },
  itemText: {
    color: "#000",
    fontFamily: "Montserrat-SemiBold",
  },

  itemTextPrice: {
    fontFamily: "Montserrat-Regular",
  },

  itemImage: {
    height: 120,
    width: Dimensions.get("window").height / numColumns,
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
});
