import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import RoundImage from '../../../components/RoundImage';
import { useState } from 'react';
import appThemeColors from '../../../utils/Colors';
import { useNavigation } from '@react-navigation/core';
import TopNavigation from '../../../components/app/TopNavigation';

const Profile = () => {
  const navigation = useNavigation()
  const [isModalVisible, setIsModalVisible] = useState(false);
  // State for toggles
  const [toggles, setToggles] = useState({
    theme: false,
    notifications: false,
    location: false,
  });

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  const userData = {
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phoneNumber: "012 456 7890",
    dateOfBirth: "6 January 1999",
    university: "Tshwane University Of Technology",
    qualification: "Bachelor of Science in Computer Science",
    completionDate: "12 June 2023",
    gpa: 75,
    profilePhoto: null,
  };

  const settingsOptions = [
    { name: "Theme", key: "theme", isToggle: true },
    { name: "Notifications", key: "notifications", isToggle: true },
    { name: "Location", key: "location", isToggle: true },
    { name: "Password", key: "password", isToggle: false },
    { name: "Feedback", key: "feedback", isToggle: false },
    { name: "Help", key: "help", isToggle: false },
    { name: "Privacy Policy", key: "privacy", isToggle: false },
  ];

  // Function to toggle switch state
  const toggleSwitch = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Get profile photo, if none thenn use default photo
  const getProfilePhoto = () => {
    return userData.profilePhoto
      ? { uri: userData.profilePhoto }
      : require("../../../../assets/logo.png");
  };

  const handleEdit = () => {
    navigation.navigate('createProfile')
  }

  return (
    <View style={styles.container}>
      {/* top navigation */}
      <TopNavigation />

      {/* Round Image at the top center */}
      <RoundImage source={getProfilePhoto()} size={100} style={styles.roundImage} />

      {/* User Data */}
      <View style={styles.userDataContainer}>
        <View style={styles.nameEmailContainer}>
          <Text style={styles.nameText}>{userData.name}</Text>
          <Text style={styles.emailText}>{userData.email}</Text>
          <TouchableOpacity onPress={handleEdit}  style={styles.editIconContainer}>
            <Icon name="edit" size={20} color="#06AFE2" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userDetailText}>Phone Number: {userData.phoneNumber}</Text>
        <Text style={styles.userDetailText}>Date of Birth: {userData.dateOfBirth}</Text>

        <View style={styles.educationContainer}>
          <Text style={styles.userDetailText}>{userData.university}</Text>
          <Text style={styles.userDetailText}>{userData.qualification}</Text>
          <Text style={styles.userDetailText}>Completion Date: {userData.completionDate}</Text>
          <Text style={styles.userDetailText}>GPA: {userData.gpa}</Text>
        </View>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsContainer}>
        {settingsOptions.map(option => (
          <View key={option.name} style={styles.settingRow}>
            <Text style={styles.settingName}>{option.name}</Text>
            {option.isToggle ? (
              <TouchableOpacity onPress={() => toggleSwitch(option.key)} style={styles.toggleContainer}>
                <View style={[
                  styles.toggleSwitch,
                  { backgroundColor: toggles[option.key] ? '#06AFE2' : '#ddd' }
                ]}>
                  <View style={[
                    styles.toggleCircle,
                    { transform: [{ translateX: toggles[option.key] ? 15 : 0 }] } // Move circle based on toggle state
                  ]} />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Icon name="arrow-forward" size={20} color="#06AFE2" />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>V1.0.0</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appThemeColors['wild-sand']['200'],
    alignItems: 'center',
    paddingTop: 0,
    fontFamily: 'inter'
  },
  roundImage: {
    marginBottom: 0,
  },
  userDataContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  nameEmailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontWeight: '500'
  },
  emailText: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: '500'
  },
  userDetailText: {
    fontSize: 12,
    marginVertical: 2,
    fontWeight: '500'
  },
  educationContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  editIconContainer: {
    position: 'absolute',
    right: -60,
    top: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5
  },
  settingsContainer: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    elevation: 2, // Adds a shadow effect
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5

  },
  settingName: {
    fontSize: 14,
  },
  toggleContainer: {
    width: 50,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleSwitch: {
    width: 40,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 2,
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  versionContainer:{
    width:'90%',
    alignItems:'left',
  },
  versionText:{
    fontWeight:'500'
  }
});
