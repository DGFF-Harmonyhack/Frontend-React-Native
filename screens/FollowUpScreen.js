// TO DO 
// Submit needs to do an update dispatch for event resolved_stat + comment
// Needs confirmation Modal 
// navigate to mapscreen instead onSubmit

// in the diagram, this is #2, 
// it will have all the follow up stuff for the person who pressed the button 

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Dimensions, Modal } from 'react-native';
import * as eventsActions from '../store/actions/events'
import { useSelector, useDispatch } from 'react-redux'

const FollowUpScreen = props => {
    const dispatch = useDispatch()
    const [descriptionField, setDescriptionField] = useState('')
    // const [isResolved, setIsResolved] = useState(false)
    const [isSelectedSafeButton, setSelectedSafeButton] = useState(false)
    const [isSelectedEvidenceButton, setSelectedEvidenceButton] = useState(false)
    const [confirmationModal, setConfirmationModal] = useState(false)

    const { navigation } = props

    const currentEvent = useSelector((state) => state.events.currentEvent)
    const currentUserId = useSelector(state => state.users.user_id)

    //  when updating the event onSubmit use below 
    //  dispatch(eventsActions.updateEvent(user_id, event_id, description, resolved_stat))

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

    const buttonSelectorHelper = (buttonValue) => {
        if (buttonValue === 'Safe') {
            setSelectedSafeButton(true)
            setSelectedEvidenceButton(false)
        } else if (buttonValue === 'Help') {
            setSelectedSafeButton(false)
            setSelectedEvidenceButton(true)
        }
    }

    // const resolutionStatusHandler = (eventStatus) => {
    //     eventStatus === "Safe" ? setIsResolved(true) : setIsResolved(false)
    // }

    const submitHelperInModal = (arg) => {

        setDescriptionField('');
        navigation.navigate("Home")
    }

    return (
        <View style={styles.main}>

{/*             
            i am safe button, manage state 

            i need evidence button, manage state 

            description field, manage state 

            submit button, update backend, validate if one of the buttons was pressed, preview modal maybe?  
*/}
            <View >
                <Modal
                    animationType="slide"
                    visible={confirmationModal}
                >
                    <View style={styles.modalContentContainer}>
                        <Text>Is this correct? </Text>
                        <View>
                            <Text>blah blah the form info + location + all that jazz</Text>
                        </View>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <View style={styles.modalButton}>
                            <Button 
                                title="YES"
                                onPress={submitHelperInModal}
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
            <View style={styles.buttonContainer}>
                {/* <View style={styles.button}> */}
                    <View style={[isSelectedSafeButton? styles.unSelected : styles.selected]} >
                        <Button 
                            title="I AM SAFE"
                            onPress={() => {buttonSelectorHelper("Safe")}}
                            accessibilityLabel="I am safe"
                        />
                    </View>
                {/* </View> */}
                {/* <View style={styles.button}> */}
                    {/* <View style={(selectedSafeButton ? styles.notSselected : styles.selected)} > */}

                    <View style={[isSelectedEvidenceButton ? styles.unSelected : styles.selected]} >
                        <Button 
                            title="I NEED EVIDENCE"
                            onPress={() => {buttonSelectorHelper("Help")}}
                            accessibilityLabel="I need evidence"
                        />
                    </View>
                {/* </View> */}
            </View>
            <View>
                <TextInput
                    {...props}
                    style={styles.inputBox}
                    onChangeText={text => setDescriptionField(text)}
                    value={descriptionField}
                    placeholder="Please provide any information about what happened"
                />
            </View>
            <View>
                <Button 
                    title="Submit" 
                    onPress={() => {setConfirmationModal(true)}}
                    accessibilityLabel="Submit your follow up."
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selected: {
        // backgroundColor: 'white', 
    }, 
    unSelected: {
        backgroundColor: '#add8e6', 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
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
        marginBottom: 10, 
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
        // borderWidth: 1
        // width: '40%',
        // borderColor: 'black'
    }
})

export default FollowUpScreen; 