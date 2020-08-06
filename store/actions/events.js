export const CREATE_EVENT = 'CREATE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';

import BackendAddress from '../../constants/BackendAddress'

// all your async stuff goes in here 


// USING YOUR ASYNC FETCH 

export const fetchEvents = () => {
    return async dispatch => {
        const response = await fetch(`${BackendAddress.API}/events`)
        const responseData = await response.json()
        dispatch({
            type: SET_EVENTS, 
            events: responseData
        })
    }
}


export const createEvent = (user_id, location, description) => {
    return async dispatch => {
        // any async code you want
        const response = await fetch(`${BackendAddress.API}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                user_id, 
                location, 
                description
            })
        })
        const responseData = await response.json()
        // console.log(responseData)

        dispatch({
            type: CREATE_EVENT,
            events: responseData
        })
    }
}
