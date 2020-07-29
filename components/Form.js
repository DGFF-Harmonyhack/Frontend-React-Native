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
        setUserInput('')
        
    }
    
    return (
        <View style={styles.container}>
            <View style={{padding: 10}}>
            <TextInput placeholder="Description" onChangeText={handleUserInput}/>
            </View>
            <View style={{backgroundColor: '#34deeb', padding: 10}}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={{textAlign: 'center', fontFamily:'Roboto', color: '#fff'}}>
                    Submit
                </Text>
            </TouchableOpacity> 
            </View>         
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
    
})