import {SELECT_ARTICLES, SELECT_RANGE} from '../constants'


const defaultFiltersState = {
    selectedArticles: [],
    selectedRange: {
        from: null,
        to: null
    }
};



export default (filtersState = defaultFiltersState, action) => {

    const {type, payload} = action

    switch (type) {
        case SELECT_ARTICLES:
            return Object.assign({}, filtersState, payload);
        case SELECT_RANGE:
            return Object.assign({}, filtersState, payload);
    }

    return filtersState
}