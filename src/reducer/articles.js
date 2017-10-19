import { DELETE_ARTICLE, FILTERING_ARTICLES_BY_TITLE, FILTERING_ARTICLES_BY_VALUE } from '../constants'
import defaultArticles from '../fixtures'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id)
        case FILTERING_ARTICLES_BY_VALUE:
            console.log('big', articleState);
            console.log('small', payload.payload);

            let mutedArr = [];

            for (let key in articleState) {
                for (let key2 in payload.payload) {
                    if (articleState[key].id === payload.payload[key2]) {
                        mutedArr[key] = articleState[key];
                    }
                }
            }


            return articleState = mutedArr
    }

    return articleState
}