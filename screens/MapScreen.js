// this is actually 4 + 5 but with conditional rendering for the "List of saved" component and button

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Map from '../components/Map';
import SearchBar from '../components/SearchBar'

const MapScreen = props => {
  const [event, setEvent] = useState([]);
  console.log('map screen');

    return (
      <View>
        <Text>Events Near Me</Text>
        <View style={styles.mapRegion}>
          <SearchBar />
          <Map />
        </View>

        <View>

        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    mapRegion: {
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      height: '60%'
    }
});

export default MapScreen;
