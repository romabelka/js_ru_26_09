import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articleState = articlesMap, action) => {
    const {type, payload} = action
    let nextArticleState = {}
    switch (type) {
        case ADD_COMMENT:
            nextArticleState = {...articleState}
            nextArticleState[payload.articleId] = {}
            Object.assign(nextArticleState[payload.articleId], articleState[payload.articleId])
            nextArticleState[payload.articleId].comments.push(payload.comment.id)
            return nextArticleState

        case DELETE_ARTICLE:
            for (let id in articleState) {
                if (id !== payload.id) {
                    nextArticleState[id] = articleState[id];
                }
            }
            return nextArticleState
    }

    return articleState
}