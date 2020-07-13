// Obviously the home screen with the giant button and etc 

import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = props => {

    const [listOfSavedReqs, setListOfSavedReqs] = useState('')
    const [isThereNewSave, setIsThereNewSave] = useState(false)


    useEffect(() => {
        // check of local memory has any saved reqs

        // just a placeholder value for listofsavedreqs
        setListOfSavedReqs({
            1 : '1'
        })

        //bc of initial load, check to see if there is new value so it doesn't loop forever from the change arg in useEffect
        if(!!isThereNewSave == true) {
            setIsThereNewSave(false)
        }
    }, [isThereNewSave]);

    return (
        <View>
            <Text>The HomeScreen</Text>

            <Text>Welcome to ___________</Text>

            {/* this button is going to be replaced by a custom component? */}
            <Button 
                title="Please Record Me!" 
                onPress={() => props.navigation.navigate('FollowUp')}
            />



            {/* i think these should probably be replaced by custom components to style + css up */}
            <Button 
                title="See More Requests"
                onPress={() => props.navigation.navigate('Map')}
            />

            {/* i need to pass down some props to make this different than the above map  */}
            <Button
                title="See Saved Requests"
                onPress={() => props.navigation.navigate('Map')}
                listOfSavedReqs={listOfSavedReqs}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})

export default HomeScreen; 


            // {/* this is an example of how you can make buttons to navigate with a stack navi, it will auto create a back button  */}
            // {/* all you have to do is pass a string to props.navigation.navigate() that is defined in App.js in the routes  */}
            // <Button 
            //     title="Go to MapScreen"
            //     onPress={() => props.navigation.navigate('Map')}
            // />
