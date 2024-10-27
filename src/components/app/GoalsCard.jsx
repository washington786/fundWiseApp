import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, IconButton, ProgressBar, Text } from "react-native-paper";

import Ant from "react-native-vector-icons/AntDesign";
import appThemeColors from "../../utils/Colors";

const GoalsCard = () => {
  return (
    <Card
      mode="contained"
      style={{ backgroundColor: appThemeColors["wild-sand"][50] }}
      elevation={0}
    >
      <Card.Content style={{ width: "100%" }}>
        <View
          style={{
            gap: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text variant="headlineSmall">Study Materials</Text>
          <IconButton icon={'plus-box'} iconColor={appThemeColors.cerulean[400]}/>
          
        </View>
        <View style={{ gap: 5 }}>
          <Text variant="bodySmall">Saving for books and laptop</Text>
          <ProgressBar progress={0.7} color={appThemeColors.cerulean[500]}/>
        </View>
      </Card.Content>
    </Card>
  );
};

export default GoalsCard;

const styles = StyleSheet.create({});
