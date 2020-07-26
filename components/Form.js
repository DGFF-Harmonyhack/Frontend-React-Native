import React, {useState} from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default function Form() {
    const [userInput, setUserInput] = useState('')
    
   function handleUserInput(enteredInput){
        // set userInput state
        setUserInput(enteredInput)
    }
    
    handlePress = (evt) => {
        //try to fetch 
        evt.preventDefault()
        console.log(userInput)
        
    }
    
    return (
        <View>
            <TextInput placeholder="Description" onChangeText={handleUserInput}/>
            <TouchableOpacity onPress={handlePress}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>          
        </View>
    )
}
