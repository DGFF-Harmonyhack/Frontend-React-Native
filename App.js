import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigation stuff
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ConfirmationScreen from './screens/ConfirmationScreen'
import FollowUpScreen from './screens/FollowUpScreen'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
// ask permissions to send notification --GA
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo';



const Stack = createStackNavigator()

export default function App() {
   ///check notification permission status, when app is opened this will make sure to ask permission (ios only, android doesn't need it) -- GA
   useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj => {
      
        if(statusObj.status !== 'granted'){
            return Permissions.askAsync(Permissions.NOTIFICATIONS)
        }

        return statusObj
    }).then(statusObj => {
        if(statusObj.status !== 'granted'){
            throw new Error('Permission not granted!')
        }
    }).then(() => {
      //getting push token from android and iso server
      return Notifications.getExpoPushTokenAsync()
    }
    ).then(response=> {
   
      const token = response
      //console.log('token', token)
      // use expo push notification tool to test the token
      
    })
    .catch(err => {
      return null
    })
}, [])

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* these are the routes */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
          <Stack.Screen name="FollowUp" component={FollowUpScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


