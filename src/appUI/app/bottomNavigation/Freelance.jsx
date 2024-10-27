import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Scroller from "../../../components/Scroller";
import TopNavigation from "../../../components/app/TopNavigation";
import { Button, IconButton } from "react-native-paper";
import BursaryCard from "../../../components/app/BursaryCard";
import appThemeColors from "../../../utils/Colors";

const Freelance = () => {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <TopNavigation isHome={false} />
      <Scroller>
      <View style={styles.con}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Button
                mode="contained-tonal"
                background={appThemeColors.cerulean[400]}
                style={{ 
                  backgroundColor:appThemeColors.cerulean[400]
                 }}
              >
                Explore
              </Button>
              <Button mode="contained-tonal">Saved</Button>
              <Button mode="contained-tonal">Applied</Button>
            </View>
            <IconButton icon={'filter-variant'} iconColor={appThemeColors.cerulean[400]} size={30}/>
          </View>
          <BursaryCard title1={'Development'} title2={'Fulltime'} title3={'Remote'}/>
        </View>
      </Scroller>
    </View>
  );
};

export default Freelance;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
  },
});
