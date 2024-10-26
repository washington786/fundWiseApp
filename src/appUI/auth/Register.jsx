import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../components/MainButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    Alert.alert('Account Created!', `Email: ${email}\nFirst Name: ${firstName}`);
  };

  const handleSignIn = () => {
    alert('Navigate to Sign In');
    // navigation.navigate('Login'); // Uncomment this line if using navigation
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
      <Text style={styles.title}>Sign Up</Text>

      {/* First Name Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#888"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      {/* Last Name Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#888"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      {/* Date of Birth Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="calendar-today" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (DD/MM/YYYY)"
          placeholderTextColor="#888"
          value={dob}
          onChangeText={setDob}
        />
      </View>

      {/* Phone Number Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

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

      {/* Create Account Button */}
      <MainButton title="Create Account" onPress={handleCreateAccount} customStyles={styles.customButton} />

      {/* SignIn text */}
      <View style={styles.signInContainer}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#E5E5EA',
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
    marginBottom: 10,
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
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  customButton: {
    margin: 5,
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
  signInText: {
    fontSize: 15,
    color: '#06AFE2', // Different color for "Sign In"
    fontWeight: '500',
  },
});
