class Task {

    static id = 0
    
    constructor(payload){
        
        this._verifyPayload(payload)

        const { title, description, id } = payload
        this.id = id ? String(id) : String(Task.id++)
        this.title = title
        this.description = description
    }

    _verifyPayload({title, description}){
        if(!title)
            throw new Error('INVALID_PAYLOAD')
    }

}

module.exports = Task