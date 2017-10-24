import { DELETE_ARTICLE, UPDATE_ARTICLE_COMMENTS } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'


const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = articlesMap, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE: {
            let newState = { ...articleState }
            delete newState[payload.id];
            return newState
        }
        case UPDATE_ARTICLE_COMMENTS: {
            console.log('action.payload', action.payload);
            let newState = { ...articles };
            newState[payload.articleId].comments.push(payload.commentId);
            return newState
        }

    }

    return articles
}