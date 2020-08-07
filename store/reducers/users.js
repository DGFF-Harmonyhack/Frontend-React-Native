import { 
    SET_USER, 
    CREATE_USER
} from '../actions/users'

const initialState ={
    user_id: "",
    uu: ""
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: 
            // console.log("2 - the reducer", action.events[1])
            // console.log("reducers/users SET_USER", action.users)
            return { 
                user_id: action.users
            }
        default: 
            return state; 
    }
}

export default usersReducer; 

