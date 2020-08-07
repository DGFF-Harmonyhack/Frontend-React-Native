// change createEvent to include lot/lat instead of location
// take out description on create 
// updateEvent dispatch need to be made 

export const CREATE_EVENT = 'CREATE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';
export const UPDATE_EVENT = 'UPDATE_EVENT';

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

// changed args
export const createEvent = (user_id, lat, long) => {
    return async dispatch => {
        // any async code you want
        const response = await fetch(`${BackendAddress.API}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                user_id, 
                lat, 
                long            
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

export const updateEvent = (user_id, event_id, description, resolved_stat) => {
    return async dispatch => {
        const response = await fetch(`${BackendAddress.API}/events/${event_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                user_id, 
                description, 
                resolved_stat
            })
        })
        const rData = await response.json()

        dispatch({
            type: UPDATE_EVENT, 
            events: rData
        })
    }
}
