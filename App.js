import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigation stuff
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ConfirmationScreen from './screens/ConfirmationScreen'
import FollowUpScreen from './screens/FollowUpScreen'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'

// redux stuff 
import { createStore, combineReducers } from 'redux';
import eventsReducer from './store/reducers/events';
import { Provider } from 'react-redux';

// redux stuff 
const rootReducer = combineReducers({
  events: eventsReducer
})
const store = createStore(rootReducer);


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {/* these are the routes */}
            <Stack.Screen name="Home" component={HomeScreen} />
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


