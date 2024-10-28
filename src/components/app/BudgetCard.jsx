import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Divider, Text } from "react-native-paper";

import Ant from "react-native-vector-icons/FontAwesome";
const BudgetCard = () => {
  return (
    <Card
      mode="elevated"
      elevation={0}
      contentStyle={{ backgroundColor: "#000000" }}
    >
      <Card.Content
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ marginBottom: 8 }}>
            <Text variant="titleMedium" style={{ color: "#ffffff" }}>
              Total Budget
            </Text>
            <Text variant="bodyMedium" style={{ color: "#ffffff" }}>
              R20000.00
            </Text>
          </View>
          <View>
            <Text variant="titleMedium" style={{ color: "#ffffff" }}>
              Planned
            </Text>
            <Text variant="bodyLarge" style={{ color: "#ffffff" }}>
              R20000.00
            </Text>
          </View>
        </View>
        <Divider bold={true} style={{ backgroundColor: "#eee" }} />
        <View style={styles.con}>
          <View style={{ marginVertical: 8 }}>
            <Text variant="titleSmall" style={{ color: "#ffffff" }}>
              Debt
            </Text>
            <Text variant="bodySmall" style={{ color: "#ffffff" }}>
              R2000.00
            </Text>
          </View>
          <Ant name="pencil-square" size={25} color={"#ffffff"} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default BudgetCard;

const styles = StyleSheet.create({
  con: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
  },
  texts: {
    color: "#ffffff",
  },
});
