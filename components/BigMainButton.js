// the please record me button #1

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// this is the import you need for navigation done outside of screens
import { useNavigation } from '@react-navigation/native';


const BigMainButton = (props) => {

    // mimic the syntax and use navigation inside of a component
    const navigation = useNavigation();

    return (
        <View>
            <Text>The BigMainButton</Text>
            <Button 
                title="Please Record Me!" 
                onPress={() => navigation.navigate('FollowUp')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})

export default BigMainButton; 