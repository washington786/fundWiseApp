import { StyleSheet, View } from "react-native";
import React from "react";
import Scroller from "../../../components/Scroller";
import TopNavigation from "../../../components/app/TopNavigation";
import BudgetCard from "../../../components/app/BudgetCard";
import { Button, Text } from "react-native-paper";
import appThemeColors from "../../../utils/Colors";
import OverViewCard from "../../../components/app/OverViewCard";
import GoalsCard from "../../../components/app/GoalsCard";

const Budget = () => {
  return (
    <View style={{ backgroundColor:'#ffffff',flex:1 }}>
      <TopNavigation isHome={false} />
      <Scroller>
        <View style={styles.con}>
          <BudgetCard />
          <View style={styles.btnsCon}>
            <Button
              style={styles.btns}
              icon="arrow-up"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Add income
            </Button>
            <Button
              style={styles.btns}
              icon="arrow-down"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Add Expense
            </Button>
          </View>

          {/* overview */}
          <Text variant="titleMedium">Budget Overview</Text>
          <View style={styles.overviewCon}>
            <OverViewCard isInCome={true} />
            <OverViewCard isInCome={false} />
          </View>

          {/* goals */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text variant="titleMedium" style={styles.title}>
              My Goals
            </Text>
            <Button mode="text" style={styles.btn} contentStyle={styles.btn}>
              View all
            </Button>
          </View>
          <GoalsCard />

          {/* bills */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text variant="titleMedium" style={styles.title}>
              My Bills
            </Text>
            <Button mode="text" style={styles.btn} contentStyle={styles.btn}>
              View all
            </Button>
          </View>
          <GoalsCard />
        </View>
      </Scroller>
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
  },
  btnsCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 10,
    gap: 10,
  },
  btns: {
    backgroundColor: appThemeColors.cerulean[500],
    flex: 1,
  },
  overviewCon: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    // Gap:8
    marginVertical: 5,
  },
  title: {
    marginVertical: 10,
  },
  btn: {
    color: appThemeColors.cerulean[400],
  },
});
