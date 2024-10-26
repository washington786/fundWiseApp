import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { SliderBox } from "react-native-image-slider-box";

const images = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
];
const Carousel = () => {
  return (
    <SliderBox
      images={images}
      sliderBoxHeight={200}
      onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({});
