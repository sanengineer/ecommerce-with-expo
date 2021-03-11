import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { IconAngleLeftBig, IconMoreHorizontal } from "../../assets";
import { ModalBottom, Space } from "../../components";

const data = [
  {
    shipping_id: 1,
    name_shipping: "home",
    street: "espresso street",
    number: "20",
    city: "gotham",
    province: "middle earth",
    postal_code: "10902",
    main_address: true,
  },
  {
    shipping_id: 2,
    name_shipping: "office",
    street: "latte street",
    number: "40",
    city: "central",
    province: "middle earth",
    postal_code: "10962",
    main_address: false,
  },
];

const ShippingMap = ({ data, showModalOnList, setModalLog }) => {
  //
  //debug
  // console.log("data_shipping:", data);
  // console.log("modalShow:", showModalOnList);

  const ItemShipping = (item) => {
    //
    //debug
    // console.log("item_shipping:", item);

    return (
      <>
        <View style={styles.itemContainer} key={item.shipping_id}>
          <View style={styles.itemAddressAndEditContainer}>
            <View style={styles.item}>
              <View style={styles.itemTitleContainer}>
                <Text style={styles.textTitle}>{item.name_shipping}</Text>
                <Space width={8} />
                {!item.main_address ? null : (
                  <View style={styles.statusDefaultAddressContainer}>
                    <Text style={styles.statusDefaultAddress}>Default</Text>
                  </View>
                )}
              </View>
              <Space height={4} />
              <Text style={styles.textPlain}>
                {item.street}, No {item.number}
              </Text>
              <Text style={styles.textPlain}>
                {item.city}, {item.province}
              </Text>
              <Text style={styles.textPlain}>{item.postal_code}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                showModalOnList();
                setModalLog(item.name_shipping);
              }}
            >
              <View style={styles.editContianer}>
                <IconMoreHorizontal />
              </View>
            </TouchableOpacity>
          </View>
          <Space height={20} />
          <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.changeAddressContainer}>
              <Text style={styles.changeAddressText}>Change Address</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const table = data.map((data_map) => ItemShipping(data_map));

  return <>{table}</>;
};

const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
  Platform.OS === "ios"
    ? Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get(
        "REAL_WINDOW_HEIGHT"
      );

const Shipping = ({ navigation }) => {
  //
  //debug
  // console.log("navigation_shipping:", navigation);
  // console.log("data:", data);

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalLog, setModalLog] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const SetAddressDefault = () => {
    console.log("default");
  };

  const DeleteAddress = () => {
    console.log("delete");
  };

  //
  //debug
  console.log("isModalVisible_ship:", isModalVisible);
  console.log("modalLog:", modalLog);
  return (
    <>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.screenContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconAngleLeftBig />
            </TouchableOpacity>
            <Text style={styles.textHeaderContainer}>Shipping</Text>
            <View>
              <Space width={30} />
            </View>
          </View>
          <View style={styles.mainContianer}>
            <Text style={styles.titleMain}>Shipping Address</Text>
            <Space height={20} />
            <View>
              <ShippingMap
                data={data}
                showModalOnList={toggleModal}
                setModalLog={setModalLog}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ModalBottom
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}
        onPressClose={toggleModal}
        onPressDefault={SetAddressDefault}
        onPressDelete={DeleteAddress}
        modalLog={modalLog}
      />
    </>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  screenContainer: {
    // paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#dddddd",
    // backgroundColor: "cyan",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  textHeaderContainer: {
    // backgroundColor: "red",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  mainContianer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titleMain: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  itemAddressAndEditContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editContianer: {
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  itemContainer: {
    marginBottom: 20,
    padding: 20,
    borderColor: "#cecece",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },

  itemTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    textTransform: "capitalize",
  },
  textPlain: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textTransform: "capitalize",
  },

  statusDefaultAddress: {
    fontSize: 11,
    fontFamily: "Montserrat-Bold",
    color: "#038C00",
  },
  statusDefaultAddressContainer: {
    backgroundColor: "#85FF83",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  changeAddressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 10,
    backgroundColor: "#000",
    borderRadius: 8,
  },
  changeAddressText: {
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
});
