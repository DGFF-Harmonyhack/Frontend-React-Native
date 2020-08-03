// in the diagram, this is #2, 
// it will have all the follow up stuff for the person who pressed the button 

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const FollowUpScreen = props => {

    const [descriptionField, setDescriptionField] = useState('')
    const [isResolved, setIsResolved] = useState(false)


    const submitHandler = () => {
        // this will make an update, should probably send 
        // user id / user uuid / event id / resolved boolean based on which button  

        setDescriptionField('');

        // show modal confirm
        // after modal change screen to home 
    }

    const resolutionStatusHandler = (eventStatus) => {
        eventStatus === "Safe" ? setIsResolved(true) : setIsResolved(false)
    }

    return (
        <View>
            <Text>The FollowUpScreen</Text>
{/*             
            i am safe button, manage state 

            i need evidence button, manage state 

            description field, manage state 

            submit button, update backend, validate if one of the buttons was pressed, preview modal maybe?  
*/}
            <View>
                <View>
                    <Button 
                        title="I AM SAFE"
                        onPress={resolutionStatusHandler.bind(this, "Safe")}
                        accessibilityLabel="I am safe"
                    />
                </View>
                <View>
                    <Button 
                        title="I NEED EVIDENCE"
                        onPress={resolutionStatusHandler.bind(this, "Help")}
                        accessibilityLabel="I need evidence"
                    />
                </View>
            </View>
            <View>
                <TextInput
                    blurOnSubmit={true}
                    {...props}
                    editable
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={text => setDescriptionField(text)}
                    value={descriptionField}
                    placeholder="Please provide any information about what happened"
                />
            </View>
            <View>
                <Button 
                    title="Submit" 
                    onPress={submitHandler}
                    accessibilityLabel="Submit your follow up."
                />
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