// import { ActionSheetIOS } from 'react-native'
import { 
    SET_EVENTS, 
    CREATE_EVENT
 } from '../actions/events'

const initialState ={
    allEvents: [],
    filteredEvents: [],
    savedEvents: []
}

const eventsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EVENTS: 
            // console.log("2 - the reducer", action.events[1])
            return { 
                allEvents: action.events, 
                // replace the user_id value with a state value of the user's id val 
                savedEvents: action.events.filter((event) => event.user_id === 126)
            }
        case CREATE_EVENT: 
            console.log("create_event action.events", action.events)
            return {
                ...state, 
                allEvents: {
                    ...state.allEvents, 
                }
            }
        default: 
            return state; 
    }
    return state; 
}

export default eventsReducer; 

