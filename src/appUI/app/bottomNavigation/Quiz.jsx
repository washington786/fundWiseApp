import { StyleSheet, View } from "react-native";
import React from "react";
import Scroller from "../../../components/Scroller";
import TopNavigation from "../../../components/app/TopNavigation";
import { Button, Card, Text } from "react-native-paper";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import appThemeColors from "../../../utils/Colors";

const Quiz = () => {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <TopNavigation isHome={false} />
      <Scroller>
        <View style={styles.con}>
          <Card
            mode="contained"
            elevation={0}
            style={{ backgroundColor: "#000", borderRadius: 0 }}
          >
            <Card.Content
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.txtCon}>
                <Text style={styles.txts} variant="labelLarge">
                  Points
                </Text>
                <Text style={styles.txts} variant="bodySmall">
                  100
                </Text>
              </View>
              <View style={styles.txtCon}>
                <Text style={styles.txts} variant="labelLarge">
                  Rank
                </Text>
                <Text style={styles.txts} variant="bodySmall">
                  1
                </Text>
              </View>
              <View style={styles.txtCon}>
                <Text style={styles.txts} variant="labelLarge">
                  Attempts
                </Text>
                <Text style={styles.txts} variant="bodySmall">
                  3
                </Text>
              </View>
            </Card.Content>
          </Card>
          <View
            style={{
              height: "50%",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              // backgroundColor:'#ddd',
              // // flex:1
              // flexDirection:'column'
            }}
          >
            <EvilIcons name="trophy" size={120} color={"#e444"} />
            <Text variant="titleLarge">Budget Quiz</Text>
            <Button
              mode="contained-tonal"
              buttonColor={appThemeColors.cerulean[500]}
              textColor="#eee"
              style={styles.btn}
            >
              Play
            </Button>
          </View>
        </View>
      </Scroller>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
  },
  txts: {
    color: "#FFFFFF",
  },
  txtCon: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  btn: {
    width: "50%",
    marginTop:10
  },
});
