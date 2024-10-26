import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopNavigation from '../../../components/app/TopNavigation';

const Notifications = () => {
  const notifications = [
    { title: "New Message", details: "You have a new message", date: "2024-10-25" },
    { title: "App Update", details: "A new update is available", date: "2024-10-20" },
    { title: "Event Reminder", details: "Don't forget your event tomorrow", date: "2024-10-19" },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Icon name="notifications" size={24} color="#06AFE2" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TopNavigation />
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 16,
    backgroundColor: '#E5E5EA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  notificationDate: {
    fontSize: 10,
    color: '#888',
  },
});
