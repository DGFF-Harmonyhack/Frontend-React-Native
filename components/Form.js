import React, {useState} from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Form() {
    // state management with hook
    const [userInput, setUserInput] = useState('')
    
   const handleUserInput = (enteredInput) => {
        // set userInput state
        setUserInput(enteredInput)
    }
    
   const handlePress = (evt) => {
        //prevent default and maybe fetch in the future
        evt.preventDefault()
        console.log(userInput)
        
    }
    
    return (
        <View style={styles.container}>
            <TextInput placeholder="Description" onChangeText={handleUserInput}/>
            <TouchableOpacity onPress={handlePress}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
})