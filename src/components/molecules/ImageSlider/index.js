import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { FlatListSlider } from "react-native-flatlist-slider";

import {
  ShoesImage,
  AvocadoFruit,
  StrawberryFruit,
  MangoFruit,
  ImageBannerDummy,
} from "../../../assets";
import { Dimensions } from "react-native";

const data = [
  ImageBannerDummy,
  ImageBannerDummy,
  ImageBannerDummy,
  ImageBannerDummy,
];

const dataFlatList = [
  // {
  //   image_id: 1,
  //   image: AvocadoFruit,
  // },
  // {
  //   image_id: 2,
  //   image: AvocadoFruit,
  // },
  {
    image_id: 3,
    image: AvocadoFruit,
  },
  {
    image_id: 4,
    image: AvocadoFruit,
  },
];

const ImageSlider = () => {
  const [image, setImage] = useState(data);
  const [state, setState] = useState();

  //   const onLayout = (e) => {
  //     setState({ width: e.nativeEvent.layout.width });

  //     console.log("e:", e);
  //   };
  //
  //debug
  // console.log("image state ImageSlider:", image);

  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
      <SliderBox
        images={image}
        autoplay
        circleLoop
        resizeMode={"cover"}
        // sliderBoxHeight={120}
        paginationBoxVerticalPadding={0}
        // parentWidth={600}
        onCurrentImagePressed={(index) => console.log(`image ${index} pressed`)}
      />
    </View>
  );
};

const Preview = ({ style, item, imageKey, onPress, index, active, local }) => {
  return (
    <TouchableOpacity onPress={() => console.log(item)}>
      <View
        style={
          {
            // height: 200,
          }
        }
      >
        <Image style={styles.imageSlider} source={item[imageKey]} />
      </View>
    </TouchableOpacity>
  );
};

const ImageSliderFlatList = () => {
  return (
    <FlatListSlider
      //   style={styles.imageSlider}
      data={dataFlatList}
      imageKey={"image"}
      // height={240}
      component={<Preview />}
      //   animation
      //   local
    />
  );
};

export { ImageSlider, ImageSliderFlatList };

const styles = StyleSheet.create({
  imageSlider: {
    // height: 100,
    resizeMode: "center",

    // height: Dimensions.get("screen").width / 2,
    // backgroundColor: "red",
    // padding: 100,
  },
});
