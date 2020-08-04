import { EVENTS } from '../../data/events-data'

const initialState ={
    events: EVENTS,
    filteredEvents: EVENTS,
    savedEvents: []
}

const eventsReducer = (state = initialState, action) => {
    return state;
}

export default eventsReducer; 

