import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import RoundImage from '../../../components/RoundImage';
import { useState } from 'react';
import appThemeColors from '../../../utils/Colors';

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  // Get profile photo, if none thenn use default photo
  const getProfilePhoto = () => {
    return userData.profilePhoto
      ? { uri: userData.profilePhoto }
      : require("../../../../assets/logo.png");
  };

  return (
    <View style={styles.container}>
      {/* top navigation */}
      {/* <TopNavigation /> */}

      {/* Round Image at the top center */}
      <RoundImage source={getProfilePhoto()} size={100} style={styles.roundImage} />

      {/* User Data */}
      <View style={styles.userDataContainer}>
        <View style={styles.nameEmailContainer}>
          <Text style={styles.nameText}>{userData.name}</Text>
          <Text style={styles.emailText}>{userData.email}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.editIconContainer}>
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appThemeColors['wild-sand']['200'], 
    alignItems: 'center',
    paddingTop: 40,
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
    fontWeight:'500'
  },
  emailText: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight:'500'
  },
  userDetailText: {
    fontSize: 12,
    marginVertical: 2,
    fontWeight:'500'
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
});
