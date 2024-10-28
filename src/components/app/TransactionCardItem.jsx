import { StyleSheet, View } from "react-native";
import React from "react";

import Ant from "react-native-vector-icons/AntDesign";
import { Card, Text } from "react-native-paper";

const TransactionCardItem = ({ transactionType }) => {
  return (
    <Card
      style={{ marginVertical: 6, backgroundColor: "#eee", borderRadius: 0 }}
      mode="contained"
    >
      <Card.Content style={styles.con}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Ant
            name="creditcard"
            size={20}
            color={transactionType !== "earned" ? "#FE4E3E" : "#3EFE3E"}
          />
          <Text variant="bodySmall">Clothing shopping</Text>
        </View>
        <View>
          <Text variant="bodyMedium">
            {transactionType !== "earned" ? "-" : "+"}R100
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default TransactionCardItem;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
