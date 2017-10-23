import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articleState = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            // фильтрация идентификаторов статей
            const arrIds = Object.keys(articleState).filter(id => id !== payload.id)
            // создание массива статей на основе массива отфильтрованных идентификаторов
            const filteredArticlesArr = arrIds.map(id => articleState[id])
            // преобразование отфильтрованного массива статей в объект
            return filteredArticlesArr.reduce((acc, article) => ({
                ...acc,
                [article.id]: article
            }), {})
        case ADD_COMMENT:
            const comments = articleState[action.payload.articleId].comments
            let newComments = comments ? comments.slice(0) : []
            newComments.push(action.payload.id)

            return {
                ...articleState,
                [action.payload.articleId]: {
                    ...articleState[action.payload.articleId],
                    comments: newComments
                }
            }
    }

    return articleState
}