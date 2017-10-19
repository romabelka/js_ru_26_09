import {INCREMENT, DELETE_ARTICLE, SELECT} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function select(selected) {
    return {
        type: SELECT,
        payload: selected
    }
}