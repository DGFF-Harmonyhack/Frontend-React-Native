// in the diagram, this is #2, 
// it will have all the follow up stuff for the person who pressed the button 

import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';


const FollowUpScreen = props => {
    const [descriptionField, setDescriptionField] = useState('')

    

    return (
        <View>
            <Text>The FollowUpScreen</Text>

            <View>
                <Button title="I AM SAFE" />
                <Button title="I NEED EVIDENCE" /> 
            </View>
            <View>
                <TextInput /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 0.3
    }
})

export default FollowUpScreen; 

