import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filtersTitle from './filtresTitle'
import filtersDate from './filtersDate'

export default combineReducers({
    counter: counterReducer,
    articles,
    filtersTitle,
    filtersDate,
})