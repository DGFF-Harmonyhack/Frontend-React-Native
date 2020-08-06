import { 
    SET_RESPONSES,
    CREATE_RESPONSE
} from '../actions/responses'

// import { useSelector } from 'react-redux'


const initialState ={
    allResponses: [],
    filteredResponses: [],
    savedResponses: []
}

const responsesReducer = (state = initialState, action) => {
    // still not sure if getting state from inside a reducer will work 
    // const userIdFromState = useSelector(state => state.users.user_id)

    switch(action.type) {
        case SET_RESPONSES: 
            return { 
                allResponses: action.responses, 
                // replace the user_id value with a state value of the user's id val 
                savedResponses: action.responses.filter((response) => response.user_id === 116)
            }
        case CREATE_RESPONSE: 
            console.log("reducers/responses", action.responses)
            return {
                ...state, 
                allResponses: [
                    ...state.allResponses,
                    action.responses
                ]
            }
        default: 
            return state; 
    }
}

export default responsesReducer; 

