import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PagerView from "react-native-pager-view";

const Dot = ({ isActive }) => (
  <View style={[styles.dot, isActive && styles.activeDot]} />
);

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { key: "1", content: "First page" },
    { key: "2", content: "Second page" },
    { key: "3", content: "Third page" },
  ];

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        {pages.map((page) => (
          <View style={styles.page} key={page.key}>
            <Text>{page.content}</Text>
          </View>
        ))}
      </PagerView>
      <View style={styles.dotContainer}>
        {pages.map((_, index) => (
          <Dot key={index} isActive={index === currentPage} />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "15%",
  },
  pager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#ccc",
  },
  activeDot: {
    backgroundColor: "#000", // Color for the active dot
  },
});
