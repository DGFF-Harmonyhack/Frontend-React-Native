// the map for 3/4/5

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Map = props => {
  console.log('map');
    return (
        <View style={styles.main}>
            <Text>The Map</Text>
            {/* just put a picture here until we figure it out  */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
      width: '80%',
      borderColor: 'blue',
      borderWidth: 2,
      flexGrow: 1
    }
})

export default Map;
