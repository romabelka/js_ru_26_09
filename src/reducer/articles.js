import { DELETE_ARTICLE, FILTER_ARTICLE } from '../constants'
import defaultArticles from '../fixtures'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    console.log("---action=", action)
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id)
        case FILTER_ARTICLE:
            return articleState.filter(article =>
                // (payload.username ? payload.username === article.username : true) &&
                (payload.from ? payload.from <= Date.parse(article.date) : true) &&
                (payload.to ? payload.to >= Date.parse(article.date) : true) &&
                (payload.ids && payload.ids.length > 0 ? payload.ids.includes(article.id) : true)
            )
    }

    return articleState
}