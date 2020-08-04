// Obviously the home screen with the giant button and etc 
import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import BigMainButton from '../components/BigMainButton'
import Form from '../components/Form'
import BackendAddress from '../constants/BackendAddress'

// redux stuff 
import { useSelector, useDispatch } from 'react-redux'
import { toggleEvents, toggleSaved } from '../store/actions/events'
import * as eventsActions from '../store/actions/events'


const HomeScreen = props => {
    const { navigation } = props
    // js memory for saved reqs
    const [listOfSavedReqs, setListOfSavedReqs] = useState('')
    // boolean switch to see if setListOfSavedReqs needs to be run 
    const [isThereNewSave, setIsThereNewSave] = useState(false)

    const [userData, setUserData] = useState()


    // redux testing 
    let allEvents = useSelector(state => state.events.allEvents)
    let savedEvents = useSelector(state => state.events.savedEvents)
    // console.log(allEvents[1].id)
    const dispatch = useDispatch();
    const toggleSavedHandler = (eventId) => {
        dispatch(toggleSaved(eventId))
    }

    useEffect(() => {
        dispatch(eventsActions.fetchEvents())
    }, [dispatch]);



    // the componentDidMount to load up local memory of saved reqs into the javascript memory
    // useEffect(() => {
    //     // check of local memory has any saved reqs
    //     // just a placeholder value for listofsavedreqs
    //     setListOfSavedReqs({
    //         1 : '1'
    //     })
    //     //bc of initial load, check to see if there is new value so it doesn't loop forever from the change arg in useEffect
    //     if(!!isThereNewSave == true) {
    //         setIsThereNewSave(false)
    //     }
    //     // the watch condition to run the useEffect again is any change in the boolean isThereNewSave
    // }, [isThereNewSave]);

    // useEffect(() => {
    //     // just for now i'm using this specific user for testing 
    //     const userIdentificaiton = AsyncStorage.setItem('@user_id', "120")
    //     // const userIdentificaiton = AsyncStorage.getItem('@user_id')

    //     if (userIdentificaiton !== null) {
    //         fetch(`${BackendAddress.API}/users/${userIdentificaiton}`)
    //         .then((r) => r.json())
    //         .then((responseData) => {
    //             console.log(responseData)
    //             setUserData(responseData)
    //             // set the list of saved reqs 
    //         })
    //     } else {
    //         fetch(`${BackendAddress.API}/users`, {
    //             method: 'post',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({})
    //         })
    //         .then((r) => r.json())
    //         .then((responseData) => {
    //             console.log(responseData)
    //             setUserData(responseData)
    //             // setUserData(JSON.stringify(responseData)) 
    //             AsyncStorage.setItem('@user_id', responseData.user_id)
    //         })
    //         Alert.alert()
    //     }
    // })


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
                        <Button 
                            title="SAVE"
                            onPress={toggleSavedHandler.bind(this, event.id)}
                        />
                    </View>
                ))}
            </View>
            <Text>Saved Events</Text>
            <View  style={styles.flatList}>
                {savedEvents.map((event) => (
                    <View key={event.id}>
                        <Text>Event id: {event.id}</Text>
                        <Text>Event location: {event.location}</Text>
                        <Text>Event resolved?: {event.resolved_stat ? "YES" : "NO"}</Text>
                        <Text>Event description: {event.description}</Text>
                        <Text>Event user_id: {event.user_id}</Text>
                        <Text>Event created_at: {event.created_at}</Text>
                        <Text>Event updated_at: {event.updated_at}</Text>
                        <Button 
                            title="SAVE"
                            onPress={toggleSavedHandler.bind(this, event.id)}
                        />
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
