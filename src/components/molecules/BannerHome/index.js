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

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

console.log(Dimensions.get("screen"));

const styles = StyleSheet.create({
  slide: {
    // width: windowWidth,
    // height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 10,
    // backgroundColor: "red",
  },
  slideImage: {
    // width: 330,
    // height: 150,
    height: Dimensions.get("screen").height / 5,
    width: Dimensions.get("screen").width - 38,
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
    backgroundColor: "#dedede",
    width: 12,
    height: 4,
  },
  paginationDotInactive: {
    backgroundColor: "#efefef",
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
      <ImageBackground source={data.image} style={styles.slideImage} />
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
