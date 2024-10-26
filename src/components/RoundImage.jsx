// RoundImage.js
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const RoundImage = ({ source, size = 100, style, borderColor = 'grey' }) => {
  return (
    <View
      style={[
        styles.imageContainer,
        { width: size, height: size, borderRadius: size / 2, borderColor, borderWidth: 1.5 },
        style,
      ]}
    >
      <Image source={source} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default RoundImage;
