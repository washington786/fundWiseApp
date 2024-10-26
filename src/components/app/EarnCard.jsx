import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, IconButton, Text } from "react-native-paper";

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
            20000.00
          </Text>
        </View>
        <View style={styles.con}>
          <Text style={styles.texts}>Earned</Text>
          <Text style={styles.texts}>Spend</Text>
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
  },
  texts: {
    color: "#ffffff",
  },
});
