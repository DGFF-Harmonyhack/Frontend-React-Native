import { 
    SET_USER, 
    CREATE_USER
} from '../actions/events'

const initialState ={
    user_id: "initialUserId",
    uu: ""
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: 
            // console.log("2 - the reducer", action.events[1])
            console.log("set user switch in reducers", action.user_id)

            return { 
                user_id: action.user_id, 
                // replace the user_id value with a state value of the user's id val 
            }
        default: 
            return state; 
    }
    return state; 
}

export default usersReducer; 

