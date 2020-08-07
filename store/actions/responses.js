export const SET_RESPONSES = 'SET_RESPONSES';
export const CREATE_RESPONSE = 'CREATE_RESPONSE';

import BackendAddress from '../../constants/BackendAddress'

// USING YOUR ASYNC FETCH

export const fetchResponses = () => {
    return async dispatch => {
        const response = await fetch(`${BackendAddress.API}/responses`)
        const responseData = await response.json()
        // console.log("actions/responses fetchRespones", responseData)
        dispatch({
            type: SET_RESPONSES,
            responses: responseData
        })
    }
}

// fill in the values needed ******

export const createResponse = (user_id, event_id, response_type, details) => {
    return async dispatch => {
        // any async code you want
        const response = await fetch(`${BackendAddress.API}/responses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id,
                event_id,
                response_type,
                details
            })
        })
        const responseData = await response.json()
        console.log(responseData)

        dispatch({
            type: CREATE_RESPONSE,
            responses: responseData
        })
    }
}
