// NEVER MIND GIVE UP WE NEED DEMO MVP

// search params basically, 4/5

import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const SearchBar = props => {
    return (
        <View style={styles.main}>
            <TextInput placeholder='Type an event search in here' />
            <Button title="Search" />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
})

export default SearchBar;
