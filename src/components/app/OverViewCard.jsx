import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";

import Ant from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
const OverViewCard = ({ isInCome }) => {
  return (
    <Card mode="outlined" elevation={0} style={{ paddingHorizontal:5,borderColor:'#eee',width:'50%' }}>
      <Card.Content style={styles.con}>
        <View style={{ gap: 7, flexDirection: "row", alignItems: "center" }}>
          <Ant
            name={isInCome ? "arrowup" : "arrowdown"}
            size={25}
            color={isInCome ? "#3e4" : "#fe4e3e"}
          />
          <Text variant="bodySmall">{isInCome ? "Income" : "Expense"}</Text>
        </View>
        <Text variant="bodyLarge" style={{ marginVertical:8 }}>R20000.00</Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            gap: 6,
          }}
        >
          <Entypo
            name="line-graph"
            size={20}
            color={isInCome ? "#3e4" : "#fe4e3e"}
          />
          <Text
            variant="bodySmall"
            style={{ color: isInCome ? "#3e4" : "#fe4e3e" }}
          >
            {isInCome ? "+" : "-"}3.50%
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default OverViewCard;

const styles = StyleSheet.create({
  con: {
    // backgroundColor: "rgba(0,0,0,0.1)",
    marginHorizontal:5
  },
});
