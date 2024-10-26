import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateProfile, ForgotPassword, Login, OneTimePin, Register, ResetPassword, Walkthrough } from "../utils/exports";

const authStack = createNativeStackNavigator();
export default function Auth() {
  return (
    <authStack.Navigator screenOptions={{ headerShown: false }}
    initialRouteName="splash">
      <authStack.Screen name="splash" component={Walkthrough} />
      <authStack.Screen name="login" component={Login} />
      <authStack.Screen name="register" component={Register} />
      <authStack.Screen name="resetPassword" component={ResetPassword} />
      <authStack.Screen name="createProfile" component={CreateProfile} />
      <authStack.Screen name="oneTimePin" component={OneTimePin} />
      <authStack.Screen name="forgotPassword" component={ForgotPassword} />
    </authStack.Navigator>
  );
}
