import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigation stuff
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screen imports
import ConfirmationScreen from './screens/ConfirmationScreen'
import FollowUpScreen from './screens/FollowUpScreen'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'

// ask permissions to send notification --GA
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo';

// redux stuff 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import eventsReducer from './store/reducers/events';
import usersReducer from './store/reducers/users'
import responsesReducer from './store/reducers/responses'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

// redux stuff 
const rootReducer = combineReducers({
  events: eventsReducer,
  users: usersReducer,
  responses: responsesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator()

export default function App() {

  // store token -- GA
  const [pushToken, setPushToken] = useState('') 
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
      //getting push token from android and iso server --GA
      return Notifications.getExpoPushTokenAsync()
    }
    ).then(response=> {
   
      const token = response
      setPushToken(token)
      // fetch should be done to send back every pushToken to backend -- GA
     
      // use expo push notification tool to test the token https://expo.io/notifications --GA
      
    })
    .catch(err => {
      return null
    })
}, [])


  return (
    <Provider store={store} >
      <NavigationContainer>
        {/*to pass down the pushToken props, changed the stack screen as following -- GA */}
        <Stack.Navigator initialRouteName="Home" pushToken={pushToken}>
            {/* these are the routes */}
            <Stack.Screen name="Home" >
                {props => <HomeScreen {...props} pushToken={pushToken} />}
            </Stack.Screen>
            <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
            <Stack.Screen name="FollowUp" component={FollowUpScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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


