import { Image, StyleSheet, View } from "react-native";
import React from "react";
import appThemeColors from "../../utils/Colors";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Walkthrough = () => {
  const navigation = useNavigation();

  function handleGetStarted() {
    navigation.navigate("register");
  }

  return (
    <View style={styles.con}>
      <Image
        source={require("../../../assets/walkthrough.png")}
        style={styles.img}
      />
      <View style={styles.wrap}>
        <View style={styles.textCon}>
          <Text variant="displaySmall" style={styles.texts}>
            Easy Progress Monitoring
          </Text>
          <Text variant="bodySmall" style={styles.texts}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quos
            debitis natus modi magnam necessitatibus ducimus amet neque
            repellendus ipsam, nobis aliquid. Neque sapiente non eum, iusto qui
            similique sit!
          </Text>
        </View>
        <Button mode="contained-tonal" uppercase onPress={handleGetStarted} buttonColor="#fff">
          Get Started
        </Button>
      </View>
    </View>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  img: {
    flex: 2,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  wrap: {
    flex: 1,
    backgroundColor: appThemeColors.cerulean[500],
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  textCon: {
    marginVertical: 10,
  },
  texts: {
    color: "#eee",
    marginBottom: 10,
  },
  btn: {
    marginTop: 15,
  },
});
