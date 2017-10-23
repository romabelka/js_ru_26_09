import { ADD_COMMENT } from '../constants'

const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
        next({
            type: action.type,
            payload: {...action.payload, id: generateId()}
        })
    } else {
        next(action)
    }
}