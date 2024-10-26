import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeatherIcons from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import appThemeColors from "../utils/Colors";

import { Home, Budget, Bursary, Freelance, Quiz } from "../utils/exports";

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appThemeColors.cerulean[600],
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: appThemeColors.black[400],
        tabBarStyle: {
          backgroundColor: appThemeColors["wild-sand"][100],
          position: "absolute",
          left: 8,
          right: 8,
          bottom: 10,
          padding: 10,
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: (colors) => (
            <FeatherIcons name="home" size={26} color={colors.color} />
          ),
        }}
      />
      <Tab.Screen
        name="budget"
        component={Budget}
        options={{
          tabBarIcon: (colors) => (
            <FeatherIcons name="credit-card" size={26} color={colors.color} />
          ),
        }}
      />
      <Tab.Screen
        name="bursary"
        component={Bursary}
        options={{
          tabBarIcon: (colors) => (
            <Ionicons name="school-outline" size={26} color={colors.color} />
          ),
        }}
      />
      <Tab.Screen
        name="freelance"
        component={Freelance}
        options={{
          tabBarIcon: (colors) => (
            <FeatherIcons name="briefcase" size={26} color={colors.color} />
          ),
        }}
      />
      <Tab.Screen
        name="quiz"
        component={Quiz}
        options={{
          tabBarIcon: (colors) => (
            <MaterialIcons name="quiz" size={26} color={colors.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
