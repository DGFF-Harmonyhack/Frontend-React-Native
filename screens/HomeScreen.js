// Obviously the home screen with the giant button and etc 
import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, FlatList } from 'react-native';

import BigMainButton from '../components/BigMainButton'
import Form from '../components/Form'

// redux stuff 
import { useSelector, useDispatch, createStoreHook } from 'react-redux'
import * as eventsActions from '../store/actions/events'
import * as userActions from '../store/actions/users'


//asyncstorage, this is sqlite/persistence + localstorage + react-native
import AsyncStorage from '@react-native-community/async-storage';
// this is an example for storing strings, the most basic level but if you want to store objects go to docs, link below
// const storeData = async (value) => {
//     try {
//       await AsyncStorage.setItem('@storage_Key', value)
//     } catch (e) {
//       // saving error
//     }
//  }
//  https://react-native-community.github.io/async-storage/docs/usage

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

    // testing user_id
    const userIdFromState = useSelector(state => state.users.user_id)

    // const getUser = async () => {
    //     try {
    //         const userIdFromAsync = await AsyncStorage.getItem('@user_id')

    //         if (userIdFromAsync !== null) {
    //             // userId is good! 
    //             // trigger fetchEvents AFTER the userId is back so that savedEvents is properly filled out
    //             dispatch(userActions.setUser(userIdFromAsync))
    //             // after this user_id can be pulled from state
    //             // just use const userId = useSelector(state => state.users.user_id)
                
    //             // console.log("userId from Async", userIdFromAsync)
    //             // console.log("users state", userIdFromState)
    //             // console.log("user_id nested", userIdFromState.user_id)

    //         } else {
    //             // no userId, create new user instance and AsyncStorage it and .then  
    //             // trigger fetchEvents AFTER the userId is back so that savedEvents is properly filled out

    //             // dispatch(userActions.createUser()) 
    //             // what is this going to return? 

    //         }
    //     } catch(e) {
    //         // error reading value 
    //     }
    // };

    // component did mount 
    useEffect(() => {

        // check asynstorage for user id and if it does not exist then create new user 
        dispatch(userActions.checkAndSaveUser())
        // .then(
        dispatch(eventsActions.fetchEvents())
            // .then()
            // console.log("3 - allEvents in HomeScreen, it is a useSelector this should be full of all the events if component did mount worked fine", allEvents[1].id)
            // console.log("4 - savedEvents in HS", savedEvents[1].id)    
        // )
    }, [dispatch]);

    useEffect(() => {
        // debug values here 
        console.log("debug", userIdFromState)


    })


    ///check notification permission status -- GA
    // useEffect(() => {
    //     Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj => {
    //         if(statusObj.status !== 'granted'){
    //             return Permissions.askAsync(Permissions.NOTIFICATIONS)
    //         }

    //         return statusObj
    //     }).then(statusObj => {
    //         if(statusObj.status !== 'granted'){
    //             return 
    //         }
    //     })
    // }, [])



    // test new 
    const createNewHandler = () => {
        dispatch(userActions.createUser())
    }



    
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


            <Button 
                title="TEST NEW"
                onPress={createNewHandler}
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
