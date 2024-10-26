import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../../components/MainButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/core';
import appThemeColors from '../../utils/Colors';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [verificationPin, setVerificationPin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Reset Password Successful');
    navigation.navigate('login')
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
      <Text style={styles.title}>Reset Password</Text>

      {/* Verification Pin Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Verification Pin"
          placeholderTextColor="#888"
          value={verificationPin}
          onChangeText={setVerificationPin}
        />
      </View>

      {/* New Password Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      {/* Confirm Password Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Submit Button */}
      <MainButton title="Submit" onPress={handleSubmit} customStyles={styles.customButton} />
    </KeyboardAwareScrollView>
  );
}

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: appThemeColors["wild-sand"][100],
    padding: 16,
  },
  logoContainer: {
    width: 216,
    height: 216
  },
  logoImg: {
    width: '100%',
    height: '100%'
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
