import { StyleSheet, View } from "react-native";
import React from "react";
import Scroller from "../../../components/Scroller";
import TopNavigation from "../../../components/app/TopNavigation";

import EarnCard from "../../../components/app/EarnCard";
import RecentTransactions from "../../../components/app/RecentTransactions";
import ChartGraph from "../../../components/app/ChartGraph";

const Home = () => {
  return (
    <Scroller>
      <TopNavigation isHome={false} />
      <View style={styles.con}>
        {/* <Carousel /> */}
        <EarnCard/>
        <ChartGraph/>
        <RecentTransactions/>
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
