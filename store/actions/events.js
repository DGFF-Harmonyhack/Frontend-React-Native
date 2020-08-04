export const TOGGLE_SAVED = 'TOGGLE_SAVED';
export const CREATE_EVENT = 'CREATE_EVENT';

import BackendAddress from '../constants/BackendAddress'

// all your async stuff goes in here 


// USING YOUR ASYNC FETCH 
export const createEvent = (user_id, location, description) => {
    return async dispatch => {
        // any async code you want 
        const response = await fetch(`${BackendAddress.API}/users/${user_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                user_id, 
                location, 
                desription
            })
        })

        const responseData = await response.json()
        
        dispatch({
            type: CREATE_EVENT,
            eventData: {
                id: responseData.id,
                location, 
                description, 
                user_id, 
                resolved_stat: responseData.resolved_stat,
                created_at: responseData.created_at,
                updated_at: responseData.updated_at
            }
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