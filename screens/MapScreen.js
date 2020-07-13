// this is actually 4 + 5 but with conditional rendering for the "List of saved" component and button 



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = props => {
    return (
        <View>
            <Text>The MapScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 0.3
    }
})

export default MapScreen; 