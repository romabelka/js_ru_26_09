import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selected from './select'
import dateRange from './dateRange'

export default combineReducers({
    counter: counterReducer,
    articles,
    selected,
    dateRange
})