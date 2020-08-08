// TO DO
// [DONE - Dom]Submit needs to do an update dispatch for event resolved_stat + comment
// [DONE - Dom]Needs confirmation Modal
// navigate to mapscreen instead onSubmit

// in the diagram, this is #2,
// it will have all the follow up stuff for the person who pressed the button

// add touchablewithout feedback for onpress hide keyboard
// add keyboardavoidingview to make stuff stay visible
// MOdal confirm should switch to map

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import * as eventsActions from '../store/actions/events';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors'

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
    const [isSelectedSafeButton, setSelectedSafeButton] = useState(false)
    const [isSelectedEvidenceButton, setSelectedEvidenceButton] = useState(false)
    const [confirmationModal, setConfirmationModal] = useState(false)

    // i need to setIsResolved when button click
    const [isResolved, setIsResolved] = useState(false)
console.log('Props:', props);
    const { navigation } = props;

    const currentEvent = useSelector((state) => state.events.currentEvent)
    const currentUserId = useSelector(state => state.users.user_id)
    const submitHandler = () => {}
        // this will make an update, should probably send
        // user id / user uuid / event id / resolved boolean based on which button / description
        // dispatch(eventsActions.updateEvent({ ...currentEvent, resolved_stat: isResolved, description: descriptionField }))

    //  when updating the event onSubmit use below
    //  dispatch(eventsActions.updateEvent(user_id, event_id, description, resolved_stat))

    const buttonSelectorHelper = (buttonValue) => {
        if (buttonValue === 'Safe') {
            setSelectedSafeButton(true)
            setSelectedEvidenceButton(false)
        } else if (buttonValue === 'Help') {
            setSelectedSafeButton(false)
            setSelectedEvidenceButton(true)
        }
    }

    const submitHelperInModal = (arg) => {
        resolutionStatusHandler(arg)
        dispatch(eventsActions.updateEvent(currentUserId, currentEvent.id, descriptionField, isSelectedSafeButton))
        setDescriptionField('');
        // this should probably go to some kind of details confirm?
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
            // console.log("resolutionStatuHandler TRUE")
            // local notification  -- GA
         Notifications.scheduleNotificationAsync({
            content: {
                title: "I'm safe",
                body: 'Please delete the record me.'
            },
            trigger:{
                seconds: 1
            }
        })
        }else{
            // console.log("resolutionSolutionHandler False")
            setIsResolved(false)
             // trigger notification
        // push notification -- GA
        // fetch('https://exp.host/--/api/v2/push/send', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Accept-Encoding': 'gzip, deflate',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         to: props.pushToken,
        //         title: 'Need evidence',
        //         body: 'Please send me the evidence'
        //     })

        // })

         // local notification  -- GA
         Notifications.scheduleNotificationAsync({
            content: {
                title: 'Need Evidence',
                body: 'Please send me the evidence.'
            },
            trigger:{
                seconds: 1
            }
        })
        }

    }


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
           style={styles.main}
           behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <View >
                <Modal
                    animationType="slide"
                    visible={confirmationModal}
                >
                    <View style={styles.modalContentContainer}>
                        <View style={styles.modalTextContainer}>
                            <Text style={styles.modalScreenText}>Is this correct? </Text>
                        </View>
                        <View>
                            <View style={styles.modalHeaderContainer}>
                                <Text style={styles.descriptionHeader}>Description</Text>
                            </View>
                            <View>
                                <Text style={styles.descriptionText}>{descriptionField}</Text>
                            </View>
                            <View>
                                <Text style={styles.descriptionText}>{isSelectedSafeButton? "I am safe!": "I need evidence!"}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <View style={styles.modalButton}>
                            <Button
                                title="YES"
                                onPress={() => {submitHelperInModal(isSelectedSafeButton? "Safe": "Help")}}
                            />
                        </View>
                        <View style={styles.modalButton}>
                            <Button
                                title="NO"
                                onPress={() => {setConfirmationModal(false)}}
                            />
                        </View>
                    </View>
                </Modal>
            </View>


            <View style={styles.textContainer}>
                <Text style={styles.followUpScreenText}>
                    FOLLOW UP SCREEN TEXT
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={[isSelectedSafeButton? styles.unSelected : styles.selected]} >
                    <Button
                        title="I AM SAFE"
                        onPress={() => {buttonSelectorHelper("Safe")}}
                        accessibilityLabel="I am safe"
                    />
                </View>
                <View style={[isSelectedEvidenceButton ? styles.unSelected : styles.selected]} >
                    <Button
                        title="I NEED EVIDENCE"
                        onPress={() => {buttonSelectorHelper("Help")}}
                        accessibilityLabel="I need evidence"
                    />
                </View>
            </View>
            <View>
                <TextInput
                    {...props}
                    multiline
                    numberOfLines={20}
                    style={styles.inputBox}
                    onChangeText={text => setDescriptionField(text)}
                    value={descriptionField}
                    placeholder="Please provide any information about what happened"
                />
            </View>
            <View>
                {/* <Button
                    style={styles.submitButton}
                    title="Submit"
                    onPress={() => {setConfirmationModal(true)}}
                    accessibilityLabel="Submit your follow up."
                /> */}
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => {setConfirmationModal(true)}}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    selected: {
        // backgroundColor: 'white',
    },
    unSelected: {
        backgroundColor: Colors.pale,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: Dimensions.get('window').height * 0.05
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: Dimensions.get('window').height * 0.05,
        // this is the height value
        height: Dimensions.get('window').height * 0.3,
        // this is the width value
        width: Dimensions.get('window').width * 0.8
    },
    modalContentContainer: {
        flex: .7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // width: '60%'
    },
    modalButton: {
        margin: 30,
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Dimensions.get('window').height * 0.07
    },
    followUpScreenText: {
        fontSize: 30,
        fontWeight: '700',
        // backgroundColor: Colors.snow

    },
    submitButton: {
        height: Dimensions.get('window').height * 0.2,
        alignItems: "center",
        padding: 10,
    },
    submitButtonText: {
        fontSize: 25,

    },
    modalTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Dimensions.get('window').height * 0.07
    },
    modalScreenText: {
        fontSize: 30,
        fontWeight: '700',

    },
    modalHeaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Dimensions.get('window').height * 0.01,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: 'black'
    },
    descriptionHeader: {
        fontSize: 22,
        fontWeight: '400',

    },
    descriptionText: {
        fontSize: 18,

    }
})

export default FollowUpScreen;
