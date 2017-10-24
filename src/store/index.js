import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'
const enhancer = applyMiddleware(logger, generateId)

const store = createStore(reducer, enhancer)

//dev only
window.store = store

export default store