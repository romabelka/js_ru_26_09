import {  FILTER_DATE_ARTICLES } from '../constants'

export default (filtersDateState = {}, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_DATE_ARTICLES:
            return filtersDateState = payload
    }

    return filtersDateState
}