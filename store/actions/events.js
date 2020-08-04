export const TOGGLE_SAVED = 'TOGGLE_SAVED';

export const toggleSaved = (id) => {
    return { type: TOGGLE_SAVED, eventId: id }
}