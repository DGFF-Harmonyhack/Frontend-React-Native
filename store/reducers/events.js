import { EVENTS } from '../../data/events-data'

const initialState ={
    allEvents: EVENTS,
    filteredEvents: EVENTS,
    savedEvents: []
}

const eventsReducer = (state = initialState, action) => {
    return state;
}

export default eventsReducer; 

