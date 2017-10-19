import {INCREMENT, DELETE_ARTICLE, FILTER_VALUE_ARTICLES, FILTER_DATE_ARTICLES, FILTERING_ARTICLES_BY_VALUE } from '../constants'

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
    return {
        type: FILTER_DATE_ARTICLES,
        payload: dateRange,
    }
}

export function filtersArticlesByValue(arrayIds) {
    filtersValueArticles(arrayIds)

    return {
        type: FILTERING_ARTICLES_BY_VALUE,
        payload: filtersValueArticles(arrayIds),
    }
}



