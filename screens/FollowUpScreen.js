// TO DO 
// [DONE - Dom]Submit needs to do an update dispatch for event resolved_stat + comment
// [DONE - Dom]Needs confirmation Modal 
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
    const [isSelectedSafeButton, setSelectedSafeButton] = useState(false)
    const [isSelectedEvidenceButton, setSelectedEvidenceButton] = useState(false)
    const [confirmationModal, setConfirmationModal] = useState(false)

    const { navigation } = props

    const currentEvent = useSelector((state) => state.events.currentEvent)
    const currentUserId = useSelector(state => state.users.user_id)

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

        dispatch(eventsActions.updateEvent(currentUserId, currentEvent.id, descriptionField, isSelectedEvidenceButton))
        setDescriptionField('');

        // this should probably go to some kind of details confirm?
        navigation.navigate("Home")
    }

    return (
        <View style={styles.main}>
            <View >
                <Modal
                    animationType="slide"
                    visible={confirmationModal}
                >
                    <View style={styles.modalContentContainer}>
                        <Text>Is this correct? </Text>
                        <View>
                            <Text>Description:</Text>
                            <Text>{descriptionField}</Text>
                            <Text>STATUS</Text>
                            <Text>{isSelectedSafeButton? "Safe": "Need Evidence"}</Text>
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
    }
})

export default FollowUpScreen; 