import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

const GoBack = () => {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={{ paddingVertical: 5, paddingHorizontal:6 }}>
      <IconButton
        icon="close"
        iconColor={"#000"}
        size={20}
        onPress={handleGoBack}
      />
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({});
