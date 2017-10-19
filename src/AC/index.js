import { INCREMENT, DELETE_ARTICLE, SELECT, DATE_RANGE} from '../constants'

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

export function dateRangeSelect(selected) {
    return {
        type: DATE_RANGE,
        payload: selected
    }
}