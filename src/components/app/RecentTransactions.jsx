import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import TransactionCardItem from "./TransactionCardItem";

const RecentTransactions = () => {
  return (
    <View style={styles.con}>
      <Text variant="titleMedium">Recent Transactions</Text>
      <TransactionCardItem/>
    </View>
  );
};

export default RecentTransactions;

const styles = StyleSheet.create({
  con: {
    marginVertical: 8,
  },
});
