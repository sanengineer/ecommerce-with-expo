import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Space } from "../../atom";

const ModalCenter = ({
  isVisible,
  backdropColor,
  onBackdropPress,
  textContent,
  textTitle,
}) => {
  return (
    <>
      <Modal
        isVisible={isVisible}
        backdropColor={backdropColor}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View
          style={{
            backgroundColor: "white",
            // height: Dimensions.get("screen").height / 3,
            borderRadius: 16,
            // justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textTransform: "capitalize",
              fontFamily: "CircularStd-Black",
            }}
          >
            {textTitle}
          </Text>
          <Space height={20} />
          <Text
            style={{
              fontSize: 16,
              textAlign: "left",
              lineHeight: 22,
              fontFamily: "CircularStd-Book",
            }}
          >
            {textContent}
          </Text>
        </View>
      </Modal>
    </>
  );
};

export default ModalCenter;
