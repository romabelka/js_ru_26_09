import {
    INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE,
    LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS, ERROR
} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadAllArticles() {
    return (dispatch, getState) => {
        const { loading, loaded } = getState().articles
        if (loading || loaded) return

        dispatch({
            type: LOAD_ALL_ARTICLES,
            callAPI: '/api/article'
        })
    }
}
/*

export function loadArticleById(id) {
    return {
        type: LOAD_ARTICLE,
        payload: { id },
        callAPI: `/api/article/${id}`
    }
}
*/

export function loadArticleById(id) {
    return (dispatch, getState) => {
        const article = getState().articles.getIn(['entities', id])
        if (article && (article.text || article.loading)) return

        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: { id, response }
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + ERROR,
                payload: { id, error }
            }))
        , 1000)
    }
}

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}


export function loadComments(pageNum) {
    return (dispatch, getState) => {
        const loading = getState().comments.get('loading')
        if (loading || pageNum <= 0) return

        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { pageNum }
        })

        const limit = 5
        const offset = pageNum === 1 ? 0 : (pageNum - 1) * getState().comments.pageLimit
        setTimeout(() => fetch(`/api/comment?limit=${limit}&offset=${offset}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: { pageNum, response: response.records, total: response.total}
                }))
                .catch(error => dispatch({
                    type: LOAD_COMMENTS + ERROR,
                    payload: { pageNum, error }
                }))
            , 1000)
    }
}