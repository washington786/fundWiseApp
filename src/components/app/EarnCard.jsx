import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, IconButton, Text } from "react-native-paper";

import Ant from "react-native-vector-icons/AntDesign";

const EarnCard = () => {
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconButton icon={"credit-card-chip"} size={30} iconColor="#ffffff" />
          <Text variant="bodyLarge" style={{ color: "#ffffff" }}>
            R20000.00
          </Text>
        </View>
        <View style={styles.con}>
          <Text style={styles.texts}>
            Earned <Text style={styles.texts}>+R350.00</Text>{" "}
            <Ant name="arrowup" size={20} color={"#3EFE3E"} />
          </Text>
          <Text style={styles.texts}>
            Spend <Text style={styles.texts}>-R300.00</Text>{" "}
            <Ant name="arrowdown" size={20} color={"#FE4E3E"} />
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default EarnCard;

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
