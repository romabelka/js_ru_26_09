import { SELECT_ARTICLE, UNSELECT_ARTICLE } from '../constants';

export default (selectArticlesState = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_ARTICLE:
            if(payload) selectArticlesState = payload;
            return selectArticlesState;
        case UNSELECT_ARTICLE:
            window.somePayload = payload;
            return payload.selectedArticles.filter(article => article.value !== payload.selected);
    }

    return selectArticlesState
}