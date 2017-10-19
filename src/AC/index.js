import {INCREMENT, DELETE_ARTICLE, APPLY_SELECT_FILTER, APPLY_DATE_FILTER} from '../constants'

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

export function applySelectFilter(selected) {
    return {
        type: APPLY_SELECT_FILTER,
        payload: { selected }
    }
}

export function applyDateFilter(dateRange) {
    return {
        type: APPLY_DATE_FILTER,
        payload: { dateRange }
    }
}