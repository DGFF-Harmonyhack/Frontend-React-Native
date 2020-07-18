import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default function Form() {
    return ()
        <View>
            <TextInput placeholder="Description"/>
            <TouchableOpacity>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>          
        </View>
    )
}
