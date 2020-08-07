// TO DO 

// CONFIMRATION SCREEN NEEDS EVENT_ID maybe pull from currentEvent
//  
// needs dispatch(responsesActions.createResponse())

// see all responses to event 

// need another textInput for description 
// drop down for response 
// + useState 


// 



// this is # 3, the confirmation screen

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Map from '../components/Map'
import { useSelector, useDispatch } from 'react-redux'
import * as responsesActions from '../store/actions/responses'


const ConfirmationScreen = ({ event }) => {
  const currentEvent = useSelector(state => state.events.currentEvent)
  const currentUserId = useSelector(state => state.users.user_id)

  const dispatch = useDispatch();
  // still need a variable to show all related responses? 

  // use dispatch(responsesActions.createResponse(user_id, has_evidence, comment, event_id))


  return (
    <View style={styles.main}>
        <Text>The Confirmation Screen</Text>

        {/* Render Map */}
        <View style={styles.mapRegion}>
          <Map />
        </View>

        {/* SHow event details */}
        <View style={styles.detailsRegion}>
          <Text>Details</Text>

        {/* again, random assumption that event is an object with a description property that's a string. change when data structure gets fleshed out, */}
          <Text>{/* event.description */}Was this supposed to be a text input area?</Text>
        </View>

        <View>
          <Button title="is this supposed to be a bunch of button choices, or a dropdown, or what, i dont remember" />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    main: {},
    mapRegion: {
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      height: '33%',
      width: '90%'
    },
    detailsRegion: {
      height: '33%',
      borderColor: 'blue',
      borderWidth: 1,
      width: '90%',
      marginTop: '4%',
    }
})

export default ConfirmationScreen;
