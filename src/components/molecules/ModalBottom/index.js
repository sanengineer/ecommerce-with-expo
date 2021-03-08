import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

const ModalBottom = ({
  isVisible,
  onBackdropPress,
  onPressClose,
  onPressDelete,
  onPressDefault,
  modalLog,
}) => {
  //
  //debug
  console.log("modalLog:", modalLog);
  return (
    <>
      <Modal
        isVisible={isVisible}
        // deviceHeight={deviceHeight}
        // deviceWidth={deviceWidth}
        // swipeDirection="down"
        style={styles.modal}
        onBackdropPress={onBackdropPress}
      >
        <View>
          <View
            style={{
              backgroundColor: "white",
              height: 180,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <View
              style={{
                alignContent: "flex-end",
                alignItems: "flex-end",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <Button title="Close" onPress={onPressClose} />
            </View>
            <TouchableOpacity onPress={onPressDefault}>
              <View
                style={{
                  paddingHorizontal: 26,
                  paddingVertical: 14,
                }}
              >
                <Text style={{ fontSize: 18, fontFamily: "Montserrat-Bold" }}>
                  Set {modalLog} as default address
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#e7e7e7",
                borderStyle: "solid",
              }}
            />
            <TouchableOpacity onPress={onPressDelete}>
              <View
                style={{
                  paddingHorizontal: 26,
                  paddingVertical: 14,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Montserrat-Bold",
                    color: "red",
                  }}
                >
                  Remove {modalLog} address
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalBottom;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
