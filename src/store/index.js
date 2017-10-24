import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'

const enhancer = applyMiddleware(thunk, randomId, api, logger)

const store = createStore(reducer, enhancer)

//dev only
window.store = store

export default store