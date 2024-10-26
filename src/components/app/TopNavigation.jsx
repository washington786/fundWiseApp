import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import appThemeColors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const TopNavigation = ({ isHome }) => {
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  function handleSearch() {}
  function handleAccount() {}
  function handleNotifications() {}
  return (
    <View style={styles.con}>
      {isHome && (
        <IconButton
          icon={"chevron-left"}
          iconColor={appThemeColors.black[600]}
          onPress={handleBack}
          size={26}
        />
      )}

      <View style={[styles.icons, !isHome && styles.home]}>
        <IconButton
          icon={"magnify"}
          size={26}
          iconColor={appThemeColors.black[600]}
          onPress={handleSearch}
        />
        <IconButton
          icon={"bell-badge-outline"}
          size={26}
          iconColor={appThemeColors.black[600]}
          onPress={handleNotifications}
        />
        <IconButton
          icon={"account-outline"}
          size={26}
          iconColor={appThemeColors.black[600]}
          onPress={handleAccount}
        />
      </View>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  home: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent:"flex-end",
  },
});
