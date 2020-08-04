export const TOGGLE_SAVED = 'TOGGLE_SAVED';
export const CREATE_EVENT = 'CREATE_EVENT';
export const SET_EVENTS = 'SET_EVENTS'

import BackendAddress from '../../constants/BackendAddress'

// all your async stuff goes in here 

export const fetchEvents = () => {
    return async dispatch => {
        // any async code you want 


        const response = await fetch(`${BackendAddress.API}/events`)
        const responseData = await response.json()
        // console.log(" 1 - fetchEvents is triggered sample event id", responseData[1].id)
        dispatch({
            type: SET_EVENTS,
            events: responseData
        })
        // dispatch => {
        //     dispatch({
        //         type: SET_EVENTS, 
        //         events: responseData
        //     })
        // }


        // can you double down on asyncs? or do i make another action and trigger it inside homescreen
    }
}

// USING YOUR ASYNC FETCH 

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
            eventData: responseData
        })
    }
}

// this.id = id,
// this.location = location, 
// this.resolved_stat = resolved_stat,
// this.description = description,
// this.user_id = user_id,
// this.created_at = created_at,
// this.updat



export const toggleSaved = (id) => {
    return { type: TOGGLE_SAVED, eventId: id }
}