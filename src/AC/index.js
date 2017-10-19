import {INCREMENT, DELETE_ARTICLE, FILTER_VALUE_ARTICLES} from '../constants'

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

export function filtersValueArticles(arrayIds) {
    console.log('AC IDs', arrayIds);
    return {
        type: FILTER_VALUE_ARTICLES,
        payload: arrayIds
    }
}

