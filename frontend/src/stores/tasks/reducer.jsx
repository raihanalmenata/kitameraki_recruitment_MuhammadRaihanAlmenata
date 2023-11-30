const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case 'added': {
            if (action.new)
                return [action.data, ...tasks]
            else    
                return [...tasks, action.data]
    }
        case 'deleted': {
            const newTasks = [...tasks]
            const targetId = action.id
            for (let i = 0; i < newTasks.length; i++) {
                const curId = newTasks[i]['id']
                if (curId == targetId) {
                    newTasks.splice(i, 1)
                    return newTasks
                }
            }
        }
        case 'edited': {
            const newTasks = [...tasks]
            const targetId = action.data.id
            for (let i = 0; i < newTasks.length; i++) {
                const curId = newTasks[i]['id']
                if (curId == targetId) {
                    newTasks[i] = action.data
                }
            }
            return newTasks
        }
    }
}

export default tasksReducer