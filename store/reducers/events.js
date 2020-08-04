import { EVENTS } from '../../data/events-data'
import { TOGGLE_SAVED } from '../actions/events'


// the initial state should be a fetch and not import dummy data 
const initialState ={
    allEvents: EVENTS,
    filteredEvents: EVENTS,
    savedEvents: []
}

const eventsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_SAVED:
            const existingIndex = state.savedEvents.findIndex(event => event.id === action.eventId)
            if (existingIndex >= 0) {
                // UN-SAVE 
                // need to do some fetch stuff 
                const updatedSavedEvents = [...state.savedEvents];
                updatedSavedEvents.splice(existingIndex, 1)
                return { ...state, savedEvents: updatedSavedEvents };
            } else {
                // SAVE 
                // need to do some fetch stuff 
                const event = state.allEvents.find(event => event.id === action.eventId)
                return { ...state, savedEvents: state.savedEvents.concat(event) }
            }
        default: 
            return state; 
    }

    return state;
}

export default eventsReducer; 

