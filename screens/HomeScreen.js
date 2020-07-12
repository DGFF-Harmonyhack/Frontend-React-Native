// Obviously the home screen with the giant button and etc 

import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = props => {



    return (
        <View>
            <Text>The HomeScreen</Text>

            {/* this is an example of how you can make buttons to navigate with a stack navi, it will auto create a back button  */}
            {/* all you have to do is pass a string to props.navigation.navigate() that is defined in App.js in the routes  */}
            <Button 
                title="Go to MapScreen"
                onPress={() => props.navigation.navigate('Map')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})

export default HomeScreen; 