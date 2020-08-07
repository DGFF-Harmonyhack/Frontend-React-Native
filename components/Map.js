// TO DO
//
// MARKER FIX
// SIZE FIX
// HELPER FUNCTION TO ACTUALLY FIND LOT LAT
//


// the map for 3/4/5

import React from 'react';
import MapView from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector, useDispatch, createStoreHook } from 'react-redux'
import * as eventsActions from '../store/actions/events'


const Map = props => {
    const allEvents = useSelector(state => state.events.allEvents)
    const dispatch = useDispatch()
    const dummyArray = [{id: 1}, {id: 2}]

    const mapAllEvents = () => {
      return allEvents.map((event) => {
        return (
          <MapView.Marker
            onPress={() => {dispatch(eventsActions.setCurrentEvent(event))}}
            coordinate= {{latitude: parseFloat(event.lat), longitude: parseFloat(event.long),}}
            title={event.description}
            description= {event.created_at}
          />
        )
      })
    }

  console.log('map');
    return (
        <View style={styles.container}>
          <MapView style={styles.mapStyle}
            showsUserLocation
            initialRegion = {{
              latitude:40.78825,
              longitude: -73.94,
              latitudeDelta: 0.1,
              longitudeDelta: 0.05
            }}
          >
            {mapAllEvents()}
          {/* <MapView.Marker
            coordinate= {{latitude: 40.7, longitude: -73,}}
            title={"marker.title"}
            description= {"lolz"}
          /> */}
          </MapView> 
        </View>    
  )
}

const styles = StyleSheet.create({
    main: {
      borderColor: 'blue',
      borderWidth: 2,
      flexGrow: 1,
      backgroundColor: 'blueviolet'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width * .9,
      height: Dimensions.get('window').height * .5,
    },
})

export default Map;
