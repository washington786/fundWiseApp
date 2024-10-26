import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../../components/MainButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/core';
import appThemeColors from '../../utils/Colors';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    Alert.alert('Forgot Password', `Email sent to: ${email}`);
    navigation.navigate('resetPassword');
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
          source={require('../../../assets/logo.png')}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Enter Email to Reset Password</Text>

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

      {/* Forgot Password Button */}
      <MainButton title="Reset Password" onPress={handleResetPassword} customStyles={styles.customButton} />
    </KeyboardAwareScrollView>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: appThemeColors["wild-sand"]["200"],
    padding: 16,
  },
  logoContainer: {
    width: 216,
    height: 216,
  },
  logoImg: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontFamily: 'inter',
    fontWeight: '700',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: appThemeColors["black"]["100"],
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: appThemeColors["black"]["900"],
  },
  customButton: {
    margin: 5,
  },
});
