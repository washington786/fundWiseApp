import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";

const mainStack = createNativeStackNavigator();

export default function Main() {
  return (
    <mainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="auth"
    >
      <mainStack.Screen name="auth" component={Auth} />
    </mainStack.Navigator>
  );
}
