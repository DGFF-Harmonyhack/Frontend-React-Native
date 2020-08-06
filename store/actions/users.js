export const CREATE_USER = 'CREATE_USER';
export const SET_USER = 'SET_USER';

import BackendAddress from '../../constants/BackendAddress'
import AsyncStorage from '@react-native-community/async-storage';

// USING YOUR ASYNC FETCH 
// AUGH JUST ALWAYS MAKE A NEW USER FOR NOW AND SAVE ON HOOKSTATE

const saveAsync = async (userIdVal) => {
    try {
        await AsyncStorage.setItem(
            'user_id', 
            userIdVal
        )
        console.log("actions/users when setItem saveAsync for new user", userIdVal)
    } catch (error) {
        console.log("users action saveAsync error", error)
    }
}

export const createUser = () => {
    return async dispatch => {
        // any async code you want 
        const response = await fetch(`${BackendAddress.API}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
            })
        })
        const responseData = await response.json()
        const asyncFinished = await saveAsync(responseData.id.toString())
        // console.log("if async setItem finished", asyncFinished)
        // const afterAsync = parseInt(asyncFinished)

        // console.log("actions/users if createUser worked and setItem Async worked")
        dispatch({
            type: SET_USER,
            users: responseData.id
        })
    }
}

// try to get from async 
export const setUser = (idFromAsync) => {
    return ({ type: SET_USER, users: idFromAsync })
}
