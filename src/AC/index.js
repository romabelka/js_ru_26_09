import {INCREMENT, DELETE_ARTICLE, FILTER_VALUE_ARTICLES, FILTER_DATE_ARTICLES} from '../constants'

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
    return {
        type: FILTER_VALUE_ARTICLES,
        payload: arrayIds
    }
}

export function filtersDateArticles(dateRange) {
    console.log('AC date', dateRange);
    return {
        type: FILTER_DATE_ARTICLES,
        payload: dateRange,
    }
}

