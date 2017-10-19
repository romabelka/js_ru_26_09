import {  FILTER_VALUE_ARTICLES } from '../constants'
// import defaultArticles from '../fixtures'

export default (filtersState = [], action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_VALUE_ARTICLES:
            return filtersState = [...payload]
    }

    return filtersState
}