const editableCardsReducer = (editables, action) => {
    switch (action.type) {
        case 'added': {
            console.log(action);
            return [...editables, action.id]
        }
        case 'removed': {
            return editables.filter(
                (id) => id != action.id
            )
        }
    }
}

export default editableCardsReducer