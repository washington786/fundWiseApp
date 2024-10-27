import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Scroller from "../../../components/Scroller";
import TopNavigation from "../../../components/app/TopNavigation";

const Quiz = () => {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <TopNavigation isHome={false} />
      <Scroller>
        <View style={styles.con}></View>
      </Scroller>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
  },
});
