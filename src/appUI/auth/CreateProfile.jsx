import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../../components/MainButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import appThemeColors from '../../utils/Colors';

const CreateProfile = () => {
  const [universityName, setUniversityName] = useState('');
  const [qualification, setQualification] = useState('');
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [subject, setSubject] = useState('');
  const [mark, setMark] = useState('');
  const [subjectsList, setSubjectsList] = useState([]);

  const handleAddSubject = () => {
    if (subject && mark) {
      setSubjectsList([...subjectsList, { subject, mark }]);
      setSubject('');
      setMark('');
    } else {
      Alert.alert('Error', 'Please enter both subject and mark.');
    }
  };

  const handleDeleteSubject = (index) => {
    const newList = subjectsList.filter((_, i) => i !== index);
    setSubjectsList(newList);
  };

  const handleCreateProfile = () => {
    Alert.alert('Profile Created', `University: ${universityName}\nQualification: ${qualification}`);
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
      <Text style={styles.title}>Create Profile</Text>

      {/* University Name Input */}
      <TextInput
        style={styles.input}
        placeholder="University Name"
        value={universityName}
        onChangeText={setUniversityName}
      />

      {/* Qualification Input */}
      <TextInput
        style={styles.input}
        placeholder="Qualification"
        value={qualification}
        onChangeText={setQualification}
      />

      {/* Start Date Input */}
      <TextInput
        style={styles.input}
        placeholder="Start Date"
        value={startDate}
        onChangeText={setStartDate}
      />

      {/* Completion Date Input */}
      <TextInput
        style={styles.input}
        placeholder="Completion Date"
        value={completionDate}
        onChangeText={setCompletionDate}
      />

      {/* Subject and Mark Input */}
      <View style={styles.subjectContainer}>
        <TextInput
          style={styles.subjectInput}
          placeholder="Subject"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={styles.markInput}
          placeholder="Mark"
          value={mark}
          onChangeText={setMark}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddSubject}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Subjects List */}
      <ScrollView style={styles.subjectsList}>
        {subjectsList.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listText}>{item.subject}         {item.mark}%</Text>
            <TouchableOpacity onPress={() => handleDeleteSubject(index)}>
              <Text style={styles.deleteButton}>x</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Create Profile Button */}
      <MainButton title="Create Profile" onPress={handleCreateProfile} customStyles={styles.customButton} />
    </KeyboardAwareScrollView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: appThemeColors["black"]["100"],
    borderRadius: 25,
    paddingLeft: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    color: appThemeColors['black']['500']
  },
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  subjectInput: {
    flex: 2,
    height: 50,
    borderWidth: 1,
    borderColor: appThemeColors["black"]["100"],
    borderRadius: 25,
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    color: appThemeColors['black']['500']
  },
  markInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: appThemeColors["black"]["100"],
    borderRadius: 25,
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  addButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appThemeColors["cerulean"]["500"],
    borderRadius: 25,
    width: 50,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  subjectsList: {
    width: '100%',
    marginVertical: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    height:30,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom:10
  },
  listText: {
    fontSize: 16,
    flex: 1,
    color: appThemeColors['black']['500']
  },
  deleteButton: {
    color: appThemeColors["cerulean"]["500"],
    fontSize: 15,
    fontWeight:'500',
  },
  customButton: {
    margin: 5,
  },
});
