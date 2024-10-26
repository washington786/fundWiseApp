import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Scroller from "../../../components/Scroller";
import TopNavigation from "../../../components/app/TopNavigation";

import Carousel from "../../../components/app/Carousel";
import EarnCard from "../../../components/app/EarnCard";

const Home = () => {
  return (
    <Scroller>
      <TopNavigation isHome={false} />
      <View style={styles.con}>
        {/* <Carousel /> */}
        <EarnCard/>
      </View>
    </Scroller>
  );
};

export default Home;

const styles = StyleSheet.create({
  con:{
    paddingHorizontal:10,
  }
});
