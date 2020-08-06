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


// export const checkAndSaveUser = () => {
//     return async dispatch => {
//         // console.log("checkAndSaveUser trigger")
//         const userIdFromAsync = await AsyncStorage.getItem('@user_id')


//         // need to make this await ********()
//         if (userIdFromAsync !== null) {
//             console.log("checkAndSaveUser inside if statement", userIdFromAsync)
//             // userId is good! 
//             // trigger fetchEvents AFTER the userId is back so that savedEvents is properly filled out

//             // dispatch(userActions.setUser(userIdFromAsync))
//             // after this user_id can be pulled from state
//             // just use const userId = useSelector(state => state.users.user_id)

//             // console.log("userId from Async", userIdFromAsync)
//             // console.log("users state", userIdFromState)
//             // console.log("user_id nested", userIdFromState.user_id)

//         } else {
//             console.log("checkAndSaveUser inside else statement", userIdFromAsync)

//             // no userId, create new user instance and AsyncStorage it and .then  
//             // trigger fetchEvents AFTER the userId is back so that savedEvents is properly filled out

//             // dispatch(userActions.createUser()) 
//             // what is this going to return? 
//             const response = await fetch(`${BackendAddress.API}/users`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }, 
//                 body: JSON.stringify({})
//             })
//             const responseData = await response.json()
//             // console.log(responseData)
//             const userIdFromAsync = await AsyncStorage.setItem('@user_id', responseData.user_id)
//         }

//         dispatch({
//             type: SET_USER,
//             user_id: userIdFromAsync
//         })
//     }
// }

// export const setUser = (u_id) => {
//     return dispatch => {
//         // any async code you want 

//         // check if user_id is in asyncstorage, 
//         // if yes, put user_id in redux state 
//         // if no, create user and but user_id in redux state 


//         // const response = await fetch(`${BackendAddress.API}/users`)
//         // const responseData = await response.json()
//         // console.log(" 1 - fetchEvents is triggered sample event id", responseData[0])

//         console.log("inside users action setUser user_id", u_id)
//         dispatch({
//             type: SET_USER,
//             user_id: u_id
//         })
//         // can you double down on asyncs? or do i make another action and trigger it inside homescreen
//     }
// }