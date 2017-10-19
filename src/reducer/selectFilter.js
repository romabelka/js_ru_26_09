import { APPLY_SELECT_FILTER, DELETE_ARTICLE } from '../constants'

export default (selectFilterState = [], action) => {
    const {type, payload} = action

    switch (type) {
        case APPLY_SELECT_FILTER:
            return payload.selected
        break;

        case DELETE_ARTICLE:
            return selectFilterState.filter(selectedArticle => selectedArticle.value !== payload.id)
        break;
    }

    return selectFilterState
}