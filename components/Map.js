// TO DO 
// MARKER FIX
// SIZE FIX 
// HELPER FUNCTION TO ACTUALLY FIND LOT LAT 


// the map for 3/4/5

import React from 'react';
import MapView from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Map = props => {
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
          <MapView.Marker
            coordinate= {{latitude: 40.7, longitude: -73,}}
            title={"marker.title"}
            description= {"lolz"}
          />
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
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
})

export default Map;
