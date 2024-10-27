import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";
import appThemeColors from "../../utils/Colors";

const BursaryCard = ({ title1, title2, title3 }) => {
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
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Avatar.Icon icon={"account"} size={30} />
            <View style={{ flexDirection: "column" }}>
              <Text variant="labelLarge">Undergrad Bursary</Text>
              <Text variant="bodySmall">Red Hat</Text>
              <Text variant="bodySmall">12 October 2024</Text>
            </View>
          </View>
          <IconButton
            icon={"bookmark"}
            iconColor={appThemeColors.cerulean[400]}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Button
              mode="contained-tonal"
              style={{
                padding: 0,
                backgroundColor: appThemeColors["wild-sand"][100],
              }}
              contentStyle={{ padding: 0 }}
              labelStyle={{ fontSize: 10 }}
              buttonColor={appThemeColors["wild-sand"][100]}
              disabled
            >
              {title1}
            </Button>
            <Button
              mode="contained-tonal"
              style={{
                padding: 0,
                backgroundColor: appThemeColors["wild-sand"][100],
              }}
              contentStyle={{ padding: 0 }}
              labelStyle={{ fontSize: 8 }}
              buttonColor={appThemeColors["wild-sand"][100]}
              disabled
            >
              {title2}
            </Button>
            <Button
              mode="contained-tonal"
              style={{
                padding: 0,
                backgroundColor: appThemeColors["wild-sand"][100],
              }}
              contentStyle={{ padding: 0 }}
              labelStyle={{ fontSize: 9 }}
              buttonColor={appThemeColors["wild-sand"][100]}
              disabled
            >
              {title3}
            </Button>
          </View>
          <Button buttonColor={appThemeColors.cerulean[500]}>Apply</Button>
        </View>
      </Card.Content>
    </Card>
  );
};

export default BursaryCard;

const styles = StyleSheet.create({});
