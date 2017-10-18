import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticles from './selectedArticles'
import rangeReducer from './range'

export default combineReducers({
    counter: counterReducer,
    articles,
    selectedArticles,
    range: rangeReducer
})