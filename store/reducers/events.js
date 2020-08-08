// import { ActionSheetIOS } from 'react-native'
import { 
    SET_EVENTS, 
    CREATE_EVENT,
    UPDATE_EVENT,
    SET_CURRENT_EVENT
} from '../actions/events'

// import { useSelector } from 'react-redux'
// how to get user_id inside the reducer????

const initialState ={
    allEvents: [],
    filteredEvents: [],
    savedEvents: [], 
    currentEvent: {}
}

const eventsReducer = (state = initialState, action) => {
    // not sure if getting userId from state will work in reducer
    // const userIdFromState = useSelector(state => state.users.user_id)
    switch(action.type) {
        case SET_EVENTS: 
            // console.log("2 - the reducer", action.events[1])
            return { 
                allEvents: action.events, 
                // replace the user_id value with a state value of the user's id val 
                savedEvents: action.events.filter((event) => event.user_id === 116)
            }
        case CREATE_EVENT: 
            // console.log("create_event action.events", action.events)
            return {
                ...state, 
                allEvents: [
                    ...state.allEvents,
                    action.events
                ], 
                currentEvent: action.events
            }
        case UPDATE_EVENT: 
            // console.log("reducers/events update_event trigger", action.events)
            // this needs checking with a proper call  
            const eventIndex = state.allEvents.findIndex(event => event.id === action.events.id)
            const updatedEventsArray = [...state.allEvents]
            updatedEventsArray[eventIndex] = action.events

            // console.log("updated event happened, this should trigger from followupscreen modal click yes", action.events)
            return {
                ...state, 
                allEvents: updatedEventsArray, 
                currentEvent: action.events
            }
        case SET_CURRENT_EVENT: 
            // console.log("reducers/events setting current event ", action.event)
            return {
                ...state, 
                currentEvent: action.event
            }

        default: 
            return state; 
    }
    return state; 
}

export default eventsReducer; 

