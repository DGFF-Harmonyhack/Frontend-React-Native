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

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useSelector, useDispatch } from 'react-redux';


const ConfirmationScreen = props => {

  [responseChoice, setResponseChoice] = useState('')


  return (
    <View style={styles.main}>
        <Text>The Confirmation Screen</Text>

        {/* SHow event details */}
        <View style={styles.detailsRegion}>
          <Text>Details</Text>

        {/* again, random assumption that event is an object with a description property that's a string. change when data structure gets fleshed out, */}
          <Text>{/* event.description */}Was this supposed to be a text input area?</Text>
        </View>

        <View style={styles.dropdown}>
          <Picker
            selectedValue={responseChoice}
            style={styles.pickerText}
            onValueChange={(itemValue, itemIndex) => setResponseChoice(itemValue)}
          >
            <Picker.Item
              label='I have evidence.'
              value='haveEvi'
            />

            <Picker.Item
              label='I need evidence.'
              value='needEvi'
            />

            <Picker.Item
              label="I don't have evidence."
              value='noEvi'
            />

            <Picker.Item
              label='Other Response... See written response.'
              value='other'
            />
          </Picker>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    main: {},
    dropdown: {},
    detailsRegion: {
      height: '33%',
      borderColor: 'blue',
      borderWidth: 1,
      width: '90%',
      marginTop: '4%',
    },
    pickerText: {}
})

export default ConfirmationScreen;
