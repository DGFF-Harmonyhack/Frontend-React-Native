// this is actually 4 + 5 but with conditional rendering for the "List of saved" component and button

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Map from '../components/Map';
import SearchBar from '../components/SearchBar'
import ListOfEvents from '../components/ListOfEvents'

const MapScreen = props => {
  const [event, selectEvent] = useState({});
  console.log('map screen');

  const navigation = useNavigation();

    return (
      <View style={styles.main}>
        {/* Check for prop full of saved events. if it's there, render the List Of Events component.*/}
        <View style={styles.eventRegion}>
          {props.listOfSavedReqs && (<ListOfEvents events={props.listOfSavedReqs} />)}
        </View>

        {/* title of page can be removed, i dont like how it looks*/}
        <Text>Events Near Me</Text>

        {/* Map region, renders search bar and map components*/}
        <View style={styles.mapRegion}>
          <SearchBar />
          <Map />
        </View>

        {/* Details region. Grabs the selected event from state, renders details.*/}
        <View style={styles.detailsRegion}>
          <Text>Description</Text>

          {/* Assuming selecting an event on the map calls selectEvent hook, and sets a Details property. Here i assume it's just some text */}
          <Text>{event.details}</Text>

          {/* REspond button sends you to confirmation page. idk how to put it in the bottom corner */}
          <Button
            title='Respond'
            onPress={()=>navigation.navigate("Confirmation", { event })}
            color='green'
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center'
  },
  mapRegion: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    height: '60%',
    width: '90%'
  },
  eventRegion: {},
  detailsRegion: {
    height: '35%',
    borderColor: 'blue',
    borderWidth: 1,
    width: '90%',
    marginTop: '4%',
    alignContent: 'space-between'
  }
});

export default MapScreen;
