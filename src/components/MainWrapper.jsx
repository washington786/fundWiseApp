import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import appThemeColors from "../utils/Colors";

const MainWrapper = ({ children }) => {
  return <SafeAreaView style={styles.con}>{children}</SafeAreaView>;
};

export default MainWrapper;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: appThemeColors["cerulean"][100],
  },
});
