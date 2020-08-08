// TO DO
// description field should take in info / change based on marker selected

// FIGURE OUT IF MAP CAN GIVE LOT / LAT RANGE built in if NOT do below
// to filter the allEvents if (minLong <= event.long && maxLong >= event.long && ___ && ___ ) {return event}

// need to show list of saved events if the button "see saved events" was pressed

// if click on marker or list item, show description then button to navigate to CONFIRMATION SCREEN




// this is actually 4 + 5 but with conditional rendering for the "List of saved" component and button


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import * as eventsActions from '../store/actions/events'

import Map from '../components/Map';
import SearchBar from '../components/SearchBar'
import ListOfEvents from '../components/ListOfEvents'

import Colors from '../constants/Colors'


const MapScreen = props => {
  const [event, selectEvent] = useState({});

  const dispatch = useDispatch()
  const savedEvents = useSelector(state => state.events.savedEvents) 
  const currentEvent = useSelector((state) => state.events.currentEvent)
  const currentUserId = useSelector(state => state.users.user_id)

  // when clicking on a Map marker trigger dispatch(eventsActions.setCurrentEvent(markerEventObject))
  // after dispatch the variable currentEvent should show the clicked event

  let descriptionText = currentEvent ? currentEvent.description : "Please Select An Event"

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
          {/* <SearchBar /> */}
          <Map />
        </View>

        {/* Details region. Grabs the selected event from state, renders details.*/}
        <View style={styles.detailsRegion}>
          {/* <Text>Description: </Text> */}

          {/* Assuming selecting an event on the map calls selectEvent hook, and sets a Details property. Here i assume it's just some text */}
          <Text>{descriptionText}</Text>

          {/* REspond button sends you to confirmation page. idk how to put it in the bottom corner */}
         
        </View>
        <Button
            title='Respond'
            onPress={()=>navigation.navigate("Confirmation", { event })}
            color='green'
          />
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
  eventRegion: {

  },
  detailsRegion: {
    height:  Dimensions.get('window').height * 0.25,
    borderColor: Colors.pale,
    borderWidth: 1,
    width: '90%',
    marginTop: '4%',
    // alignContent: 'space-between'
  }
});

export default MapScreen;
