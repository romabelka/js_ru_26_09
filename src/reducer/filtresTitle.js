import {  FILTER_VALUE_ARTICLES } from '../constants'

export default (filtersTitleState = [], action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_VALUE_ARTICLES:
            return filtersTitleState = [...payload]
    }

    return filtersTitleState
}

