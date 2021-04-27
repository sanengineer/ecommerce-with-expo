import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { ImageBannerDummy } from "../../../assets";
import { LinearGradient } from "expo-linear-gradient";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

console.log(Dimensions.get("screen"));

const styles = StyleSheet.create({
  slide: {
    // width: windowWidth,
    // height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    // borderRadius: 14,
    // paddingHorizontal: 10,
    // backgroundColor: "red",
  },
  slideImage: {
    // width: 330,
    // height: 150,
    height: Dimensions.get("screen").height / 5,
    width: Dimensions.get("screen").width - 52,

    // resizeMode: "cover",
  },
  slideTitle: {
    fontSize: 24,
  },
  slideSubtile: {
    fontSize: 18,
  },
  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {
    backgroundColor: "#fff",
    width: 12,
    height: 4,
  },
  paginationDotInactive: {
    backgroundColor: "#fff",
    width: 4,
    height: 4,
  },
  carousel: {
    flex: 1,
  },
});

const slideList = Array.from({ length: 4 }).map((_, i) => {
  return {
    id: i,
    image: ImageBannerDummy,
    title: "title",
    subtitle: "subtitle",
  };
});

const Slide = memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>
      <ImageBackground source={data.image} style={styles.slideImage}>
        <LinearGradient
          style={{
            // backgroundColor: "black",
            // opacity: 0.5,
            width: "100%",
            height: "100%",
            // position: "absolute",
          }}
          colors={["rgba(0,0,0,0.5)", "transparent"]}
        >
          <View
            style={{
              top: Dimensions.get("screen").height / 60,
              left: Dimensions.get("screen").width / 22,
              width: 200,
              height: 100,
              flex: 1,
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "CircularStd-Bold",
                fontSize: 36,
              }}
            >
              🤝
            </Text>
            <Text
              style={{
                color: "#fff",
                fontFamily: "CircularStd-Black",
                fontSize: 20,
                width: 160,
                // backgroundColor: "red",
              }}
            >
              BUY 1 GET 1 BUY 10 GET 10.
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
});

function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);

  indexRef.current = index;

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;

    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.6 < distance;

    console.log(slideSize, index);

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    intialNumRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderitem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index} />
    </>
  );
}
