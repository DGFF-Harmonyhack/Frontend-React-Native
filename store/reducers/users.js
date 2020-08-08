import {
    SET_USER,
    CREATE_USER,
    SET_LOCATION
} from '../actions/users'

const initialState ={
    user_id: "",
    uu: "",
    location: ''
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            // console.log("2 - the reducer", action.events[1])
            // console.log("reducers/users SET_USER", action.users)
            return {
                ...state,
                user_id: action.users
            }

        case SET_LOCATION:
        console.log('UserRecucer', action.location);
          return {
            ...state,
            location: action.location
          }

        default:
            return state;
    }
}

export default usersReducer;
