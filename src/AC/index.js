import {
    INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START,
    SUCCESS, ERROR, LOAD_COMMENTS
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
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
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
    return (dispatch) => {
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

export function loadCommentsByArticleId(articleId) {// загрузить все коменты по статье


    if (!articleId) return

    return (dispatch) => {

        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { articleId }
        })

        var time = 1000

        setTimeout(() => fetch(`/api/comment?article=${articleId}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: {articleId, response}
                }))
                .catch(error => dispatch({
                    type: LOAD_COMMENTS + ERROR,
                    payload: {articleId, error}
                }))
            , time)

        // // каждый коммент подгрузить отдельно
        // ids.forEach(id => {
        //     // начать загрузку
        //     dispatch({
        //         type: LOAD_ARTICLE + START,
        //         payload: { id }
        //     })
        //
        //     time = time + 100
        //     setTimeout(() => fetch(`/api/comment/${id}`)
        //             .then(res => res.json())
        //             .then(response => dispatch({
        //                 type: LOAD_COMMENT + SUCCESS,
        //                 payload: {id, response}
        //             }))
        //             .catch(error => dispatch({
        //                 type: LOAD_COMMENT + ERROR,
        //                 payload: {id, error}
        //             }))
        //         , time)
        // })
    }


}