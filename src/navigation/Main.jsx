import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";
import BottomNavigation from "./BottomNavigation";

const mainStack = createNativeStackNavigator();

export default function Main() {
  return (
    <mainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="auth"
    >
      <mainStack.Screen name="auth" component={Auth} />
      <mainStack.Screen name="app" component={BottomNavigation} />
    </mainStack.Navigator>
  );
}
