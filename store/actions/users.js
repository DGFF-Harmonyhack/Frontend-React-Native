export const CREATE_USER = 'CREATE_USER';
export const SET_USER = 'SET_USER';
export const SET_LOCATION = 'SET_LOCATION';

import BackendAddress from '../../constants/BackendAddress'
import AsyncStorage from '@react-native-community/async-storage';
import * as Location from 'expo-location'

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

export const setLocation = () => {
  return async dispatch => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({});

    dispatch({
      type: SET_LOCATION,
      location
    });
  }
}


// try to get from async
export const setUser = (idFromAsync) => {
    //
    // AUGH, was trying out validation of userId from Async to check if it exists in Database but epic fail
    //

    // return async dispatch => {
    //     let response;
    //     let responseData;
    //     let asyncFinished;
    //     try {
    //         console.log("actions/users setUser check idFromAsync Arg", idFromAsync)
    //         response = await fetch(`${BackendAddress.API}/users/${idFromAsync}`)
    //         responseData = await response.json()
    //         asyncFinished = await saveAsync(responseData.id.toString())
    //         console.log("after the try{} catch{} SUCCESS the responseData and asyncFinished", responseData, asyncFinished)
    //         dispatch({
    //             type: SET_USER,
    //             users: responseData.id
    //         })

    //     } catch (err) {
    //         console.log("no user by that id in db", err)
    //         response = await fetch(`${BackendAddress.API}/users`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //             })
    //         })
    //         responseData = await response.json()
    //         asyncFinished = await saveAsync(responseData.id.toString())
    //         console.log("after the try{} catch{} FAIL the responseData and asyncFinished", responseData, asyncFinished)
    //         dispatch({
    //             type: SET_USER,
    //             users: responseData.id
    //         })

    //     }
    // }

    return ({ type: SET_USER, users: idFromAsync })
}
