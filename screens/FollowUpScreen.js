// TO DO 
// Submit needs to do an update dispatch for event resolved_stat + comment
// Needs confirmation Modal 
// navigate to mapscreen instead onSubmit

// in the diagram, this is #2, 
// it will have all the follow up stuff for the person who pressed the button 

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import * as eventsActions from '../store/actions/events'
import { useSelector, useDispatch } from 'react-redux'

// notification 
import * as Notifications from 'expo-notifications'

// while app run upfront, the local notification will show --GA
Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true
        }
    }
})


const FollowUpScreen = props => {
    const dispatch = useDispatch()
    const [descriptionField, setDescriptionField] = useState('')
    const [isResolved, setIsResolved] = useState(false)
    
    const { navigation } = props
    const currentEvent = useSelector((state) => state.events.currentEvent)

    const submitHandler = () => {
        // this will make an update, should probably send 
        // user id / user uuid / event id / resolved boolean based on which button / description
        // dispatch(eventsActions.updateEvent({ ...currentEvent, resolved_stat: isResolved, description: descriptionField }))

        setDescriptionField('');

        // show modal confirm

        // after modal confirmation 
        // navigate to mapScreen instead 
        navigation.navigate("Home")

    }

    // notification --GA
    useEffect(() => { 
        // how user interact with notification when app is not running -- GA
        // will lead the user back to the app -- GA
        const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response)
        })

        // how user interact with notification when app is upfront running -- GA
        const foregroundSubscription = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log(notification)
            }
            
        )

        return () => {
            backgroundSubscription.remove()
            foregroundSubscription.remove()
        }
    }, []
    )

    const resolutionStatusHandler = (eventStatus) => {
        // eventStatus === "Safe" ? setIsResolved(true) : setIsResolved(false)
      
        if(eventStatus === "Safe"){
            setIsResolved(true)
        }else{
            setIsResolved(false)
             // trigger notification
        fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: props.pushToken,
                title: 'Need evidence',
                body: 'Please send me the evidence'
            })

        })
        }
       
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