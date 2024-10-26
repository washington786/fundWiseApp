import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RoundImage from '../../../components/RoundImage';
import MainButton from '../../../components/MainButton';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const allItems = [
    {
      title: 'Bursary',
      organisation: 'University A',
      datePosted: '2024-10-10',
      profilePhoto: require('../../../../assets/logo.png'), // Adjust path to a sample profile photo
      location: 'Sandton, ZA',
      details: 'This is a bursary program for students.',
      requirements: 'GPA 3.5 and above',
    },
    {
      title: 'Freelance Job',
      organisation: 'Tech Corp',
      datePosted: '2024-10-05',
      profilePhoto: require('../../../../assets/logo.png'),
      location: 'Remote',
      details: 'Job for frontend developers.',
      requirements: '3+ years experience in React',
    },
    // Add more items as needed
  ];

  const handleSearch = () => {
    const filteredResults = allItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  const renderResult = ({ item }) => (
    <View style={styles.resultContainer}>
      <Icon name="bookmark-border" size={20} color="#06AFE2" style={styles.bookmarkIcon} />
      <RoundImage source={item.profilePhoto} size={50} />
      <View style={styles.textContainer}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <Text style={styles.organization}>{item.organisation}</Text>
        <Text style={styles.date}>{item.datePosted}</Text>
      </View>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
          // onChange={handleSearch}
        />
        <TouchableOpacity onPress ={handleSearch}>
          <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
        </TouchableOpacity>

      </View>

      <View style={styles.resultsHeader}>
        <Text style={styles.resultsText}>{`${results.length} results for "${query}" found`}</Text>
        <Icon name="filter-list" size={24} color="#06AFE2" style={styles.filterIcon} />
      </View>

      <FlatList
        data={results}
        renderItem={renderResult}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5EA',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    alignSelf: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 8,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  resultsText: {
    fontSize: 16,
    fontWeight: '600',
  },
  filterIcon: {
    marginRight: 8,
  },
  listContainer: {
    alignItems: 'center',
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  organization: {
    fontSize: 12,
    color: '#888',
  },
  date: {
    fontSize: 10,
    color: '#888',
  },
  applyButton: {
    backgroundColor: '#06AFE2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  applyButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
