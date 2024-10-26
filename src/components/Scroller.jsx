import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Scroller = ({ children }) => {
  return <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>;
};

export default Scroller;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
});
