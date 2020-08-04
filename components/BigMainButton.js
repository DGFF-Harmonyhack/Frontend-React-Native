// the please record me button #1

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// this is the import you need for navigation done outside of screens
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications'

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

    // notification trigger function --GA
    const triggerNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'first local notification',
                body: 'hello everybody'
            },
            trigger:{
                seconds: 5
            }
        })
    }
    return (
        <View style={styles.button}>
            <Text style={styles.textStyle}>The BigMainButton</Text>
            <Button 
                title="Please Record Me!" 
                // once follow up is loaded, we can async trigger database create
                // onPress={() => navigation.navigate('FollowUp') 
                
                // bigmainbutton should trigger notification --GA
               //implement notification with onpress --GA
               onPress={triggerNotificationHandler}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center'
    },
    button: {
        borderWidth: 5
    }
})
export default BigMainButton; 