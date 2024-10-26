import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import React, { useState } from "react";

import MainButton from "../../components/MainButton";

import Icon from "react-native-vector-icons/MaterialIcons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useNavigation } from "@react-navigation/core";

import appThemeColors from "../../utils/Colors";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Alert.alert('Login data stored!', `Email: ${email}`);
    navigation.navigate("app");
  };

  const handleForgotPassword = () => {
    navigation.navigate("forgotPassword");
  };

  const handleSignUp = () => {
    navigation.navigate("register");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={require("../../../assets/logo.png")}
        />
      </View>

      {/* title */}
      <Text style={styles.title}>Sign In</Text>

      {/* Email Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity
        onPress={handleForgotPassword}
        style={styles.forgotPasswordContainer}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* SignIn Button */}
      <MainButton
        title="Login"
        onPress={handleLogin}
        customStyles={styles.customButton}
      />

      {/* SignUp text */}
      <View style={styles.signUpContainer}>
        <Text style={styles.text}>Don’t have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: appThemeColors["wild-sand"]["200"],
    padding: 16,
  },
  logoContainer: {
    width: 216,
    height: 216,
  },
  logoImg: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontFamily: "inter",
    fontWeight: "700",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: appThemeColors["black"]["100"],
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: appThemeColors["black"]["900"],
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 10,
    marginRight: "10%",
  },
  forgotPasswordText: {
    fontSize: 15,
    color: appThemeColors["cerulean"]["500"],
    fontWeight: "500",
  },
  customButton: {
    margin: 5,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  signUpText: {
    fontSize: 15,
    color: appThemeColors["cerulean"]["500"],
    fontWeight: "500",
  },
});
