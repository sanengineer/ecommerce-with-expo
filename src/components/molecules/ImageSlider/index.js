import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { FlatListSlider } from "react-native-flatlist-slider";

import {
  ShoesImage,
  AvocadoFruit,
  StrawberryFruit,
  MangoFruit,
} from "../../../assets";

const data = [ShoesImage, AvocadoFruit, StrawberryFruit, MangoFruit];

const dataFlatList = [
  {
    image_id: 1,
    image: AvocadoFruit,
  },
  {
    image_id: 2,
    image: ShoesImage,
  },
  {
    image_id: 3,
    image: MangoFruit,
  },
  {
    image_id: 4,
    image: StrawberryFruit,
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
  console.log("image state ImageSlider:", image);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <SliderBox
        images={image}
        autoplay
        circleLoop
        sliderBoxHeight={260}
        paginationBoxVerticalPadding={10}
        // parentWidth={600}
        // imageComponentStyle={{
        //   backgroundColor: "red",
        //   padding: 0,

        //   position: "absolute",
        // }}
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
            //   backgroundColor: "cyan"
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
      //   height={240}
      component={<Preview />}
      //   animation
      //   local
    />
  );
};

export { ImageSlider, ImageSliderFlatList };

const styles = StyleSheet.create({
  imageSlider: {
    resizeMode: "cover",
    height: 220,
    // backgroundColor: "red",
    // padding: 100,
  },
});
