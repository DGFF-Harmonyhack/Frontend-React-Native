// in the diagram, this is #2, 
// it will have all the follow up stuff for the person who pressed the button 

import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Form from '../components/Form'

const FollowUpScreen = props => {


    return (
        <View>
            <Text>The FollowUpScreen</Text>

            <View>
                <Button title="I AM SAFE" />
                <Button title="I NEED EVIDENCE" /> 
            </View>
            <View>
                <Form />
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

