// to do. put G's fetch from expo pushToken into Redux
// make the onPress go to next screen
// pull lot/lat data on submit

// change button component into touchableOpacity so we can change the text size inside

// the please record me button #1


// Object {
//   "coords": Object {
//     "accuracy": 5,
//     "altitude": 0,
//     "altitudeAccuracy": -1,
//     "heading": -1,
//     "latitude": 37.785834,
//     "longitude": -122.406417,
//     "speed": -1,
//   },
//   "timestamp": 1596853543443.9468,
// }


import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
// this is the import you need for navigation done outside of screens
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications'

import { useSelector, useDispatch } from 'react-redux'
import * as eventsActions from '../store/actions/events'

import Colors from '../constants/Colors'



// while app run upfront, the local notification will show --GA
Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true
        }
    }
})

const BigMainButton = props => {
    // mimic the syntax and use navigation inside of a component
    const navigation = useNavigation();

    const currentUserId = useSelector(state => state.users.user_id)
    const dispatch = useDispatch()

    //
    // use onPress dispatch(eventsActions.createEvent(user_id, lat, long))
    // need to pull lat long data somehow
    // then go to next page or confirm modal
    //

    // the reacting of users to notifications --GA
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
    // notification trigger function --GA
    const triggerNotificationHandler = () => {
        // local notification  -- GA
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Record Me',
                body: 'Please record me, here is my address.'
            },
            trigger:{
                seconds: 1
            }
        })

        // navigate to next page -- GA
        navigation.navigate('FollowUp')
        // push notification -- GA
        //https://exp.host/--/api/v2/push/send expo server -- GA
        
        // fetch('https://exp.host/--/api/v2/push/send', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Accept-Encoding': 'gzip, deflate',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         to: props.pushToken,
        //         title: 'Record me!',
        //         body: 'Please record me, here is my address'
        //     })

        // })
      nextScreenHandler();
    }

    const nextScreenHandler = () => {
        let dummyLat = -53.2819099722496
        let dummyLong = -137.337367605752

        dispatch(eventsActions.createEvent(currentUserId, dummyLat, dummyLong))
        navigation.navigate('FollowUp')
    }


    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={triggerNotificationHandler}>
                <Text style={styles.buttonText}>Record Me!</Text>
            </TouchableOpacity>
            {/* <Button

                title="Please Record Me!"
                // once follow up is loaded, we can async trigger database create
                // onPress={nextScreenHandler}
                // onPress={() => navigation.navigate('FollowUp')}  -- moved it

                // bigmainbutton should trigger push notification --GA
                //implement notification with onpress --GA
                onPress={triggerNotificationHandler}
            /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: Dimensions.get('window').height * .1
    },
    buttonText: {
        alignItems: 'center',
        fontSize: 50,
        color: 'snow'
    },
    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 500,
        alignItems:'center',
        justifyContent:'center',
        height: Dimensions.get('window').width * .7,
        width: Dimensions.get('window').width * .7,
        backgroundColor: Colors.red,
    }

    // textStyle: {
    //     flex: 1,
    //     textAlign:'center',
    //     justifyContent: 'center'
    // },
    // button: {
    //     borderWidth: 5,
    //     borderRadius: 400,
    //     backgroundColor: 'red',
    //     height: Dimensions.get('window').width ,
    // },
})
export default BigMainButton;
