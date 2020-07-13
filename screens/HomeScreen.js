// Obviously the home screen with the giant button and etc 
import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import BigMainButton from '../components/BigMainButton'

const HomeScreen = props => {
    const { navigation } = props
    // js memory for saved reqs
    const [listOfSavedReqs, setListOfSavedReqs] = useState('')
    // boolean switch to see if setListOfSavedReqs needs to be run 
    const [isThereNewSave, setIsThereNewSave] = useState(false)

    // the componentDidMount to load up local memory into the javascript memory
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
        // the watch condition to run the useEffect again is any change in the boolean isThereNewSave
    }, [isThereNewSave]);

    return (
        <View>
            <Text>The HomeScreen</Text>
            <Text>Welcome to ___________</Text>
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
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 0.3
    }
})
export default HomeScreen; 
