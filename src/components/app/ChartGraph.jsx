import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

import { StyleSheet } from "react-native";
import React from "react";
import appThemeColors from "../../utils/Colors";
import { Text } from "react-native-paper";

const ChartGraph = () => {
  return (
    <View style={styles.con}>
      <View>
        <Text variant="bodyMedium">My Expenses</Text>
      </View>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
            },
            {
              data: [30, 20, 50, 40, 60, 70],
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
            },
          ],
          legend: ["Income", "Expenses"],
        }}
        width={screenWidth - 20}
        height={220}
        yAxisLabel="R"
        chartConfig={{
          backgroundColor: appThemeColors.cerulean[700],
          backgroundGradientFrom: appThemeColors.cerulean[700],
          backgroundGradientTo: appThemeColors.cerulean[50],
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: {
            r: "0",
          },
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
};

export default ChartGraph;

const styles = StyleSheet.create({
  con: {
    marginVertical: 15,
    width: "100%",
  },
});
