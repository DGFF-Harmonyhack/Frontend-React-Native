// Obviously the home screen with the giant button and etc 
import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, FlatList } from 'react-native';

import BigMainButton from '../components/BigMainButton'
import Form from '../components/Form'

// redux stuff 
import { useSelector, useDispatch } from 'react-redux'
import * as eventsActions from '../store/actions/events'

// ask permissions to send notification --GA
import * as Permissions from 'expo-permissions'

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

    const dispatch = useDispatch();

    // component did mount 
    useEffect(() => {
        dispatch(eventsActions.fetchEvents())
        // .then()
        // console.log(" 2 - allEvents in HomeScreen, it is a useSelector this should be full of all the events if component did mount worked fine", allEvents[1].id)
        // console.log(" 4 - savedEvents in HS", savedEvents[1].id)
    }, [dispatch]);





    ///check notification permission status -- GA
    useEffect(() => {
        Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj => {
            if(statusObj.status !== 'granted'){
                return Permissions.askAsync(Permissions.NOTIFICATIONS)
            }

            return statusObj
        }).then(statusObj => {
            if(statusObj.status !== 'granted'){
                return 
            }
        })
    }, [])



    
    return (
        <View style={styles.main}>
            <Text>The HomeScreen</Text>
            <Text>Welcome to ___________</Text>
            {/* custom button component  */}
            <BigMainButton  pushToken={props.pushToken}/>
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


            

            {/* redux + componentDidMount testing  */}

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
