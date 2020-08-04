// Obviously the home screen with the giant button and etc 
import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import BigMainButton from '../components/BigMainButton'
import Form from '../components/Form'
import BackendAddress from '../constants/BackendAddress'

// redux stuff 
import { useSelector, useDispatch } from 'react-redux'
import * as eventsActions from '../store/actions/events'


const HomeScreen = props => {
    const { navigation } = props
    // js memory for saved reqs
    const [listOfSavedReqs, setListOfSavedReqs] = useState('')
    // boolean switch to see if setListOfSavedReqs needs to be run 
    const [isThereNewSave, setIsThereNewSave] = useState(false)

    const [userData, setUserData] = useState()

    // redux testing 
    const allEvents = useSelector(state => state.events.allEvents)
    const savedEvents = useSelector(state => state.events.savedEvents) 
    // console.log(" 2 - allEvents in HomeScreen, it is a useSelector this should be full of all the events if component did mount worked fine", allEvents[1].id)
    // console.log(" 4 - savedEvents in HS", savedEvents[1].id)
    // let savedEvents = useSelector(state => state.events.savedEvents)
    // console.log(allEvents[1].id)
    const dispatch = useDispatch();
    // const toggleSavedHandler = (eventId) => {
    //     dispatch(toggleSaved(eventId))
    // }

    // component did mount 
    useEffect(() => {
        dispatch(eventsActions.fetchEvents())
        // .then()
        console.log(" 2 - allEvents in HomeScreen, it is a useSelector this should be full of all the events if component did mount worked fine", allEvents[1].id)
        console.log(" 4 - savedEvents in HS", savedEvents[2].id)
    }, [dispatch]);


    // testing new event with redux-thunk / api call 
    // let test_user_id = 128
    // let test_location = "Test Location - with id as int"
    // let test_description = "Test Description - with id as int"

    // const testNewEvent = () => {
    //     dispatch(eventsActions.createEvent(test_user_id, test_location, test_description))
    // }

    return (
        <View style={styles.main}>
            <Text>The HomeScreen</Text>
            <Text>Welcome to ___________</Text>
            {/* custom button component  */}
            <BigMainButton  />
            {/* i think these should probably be replaced by custom components to style + css up */}
            <Button 
                title="See More Requests"
                onPress={() => navigation.navigate('Map')}
            />
            {/* this is how you pass down props, second arg  */}
            <Button
                title="See Saved Requests"
                onPress={() => navigation.navigate('Map', {
                    listOfSavedReqs: listOfSavedReqs
                })}
            />


            

            {/* redux testing  */}

            {/* <View>
                <Button 
                    title="test new"
                    onPress={testNewEvent}
                />
            </View> */}
            <Text>All Events</Text>
            <View style={styles.flatList}>
                {allEvents.map((event) => (
                    <View key={event.id}>
                        <Text>Event id: {event.id}</Text>
                        <Text>Event location: {event.location}</Text>
                        <Text>Event resolved?: {event.resolved_stat ? "YES" : "NO"}</Text>
                        <Text>Event description: {event.description}</Text>
                        <Text>Event user_id: {event.user_id}</Text>
                        <Text>Event created_at: {event.created_at}</Text>
                        <Text>Event updated_at: {event.updated_at}</Text>
                    </View>
                ))}
            </View>
            

        </View>
    )
}

// this is literally just here so we have a template to mess with when we google styling 
const styles = StyleSheet.create({
    main: {
        flex: 0.3
    },
    flatList: {
        height: 200
    }
})
export default HomeScreen; 
