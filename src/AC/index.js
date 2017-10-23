import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES, SELECT_RANGE} from '../constants'

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


export function selectArticles(selectedArticles) {
    return {
        type: SELECT_ARTICLES,
        payload: { selectedArticles }
    }
}

export function selectRange(selectedRange) {
    return {
        type: SELECT_RANGE,
        payload: { selectedRange }
    }
}