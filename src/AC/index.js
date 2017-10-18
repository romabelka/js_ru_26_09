import {INCREMENT, DELETE_ARTICLE, CHANGE_RANGE, SELECT_ARTICLE} from '../constants'

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

export function changeRange(range) {
    return {
        type: CHANGE_RANGE,
        payload: {range}
    }
}

export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: {selected}
    }
}