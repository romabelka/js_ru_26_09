import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectFilter from './selectFilter'
import dateFilter from './dateFilter'

export default combineReducers({
    counter: counterReducer,
    articles,
    selectFilter,
    dateFilter
})