import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, UNSELECT_ARTICLE} from '../constants'

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
export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: selected
    }
}
export function unselectArticle(selectedArticles, selected) {
    return {
        type: UNSELECT_ARTICLE,
        payload: {selectedArticles, selected}
    }
}