class Event {
    constructor(id, location, resolved_stat, description, user_id, created_at, updated_at) {
        this.id = id,
        this.location = location, 
        this.resolved_stat = resolved_stat,
        this.description = description,
        this.user_id = user_id,
        this.created_at = created_at,
        this.updated_at = updated_at
    }
}

export default Event;