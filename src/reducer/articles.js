import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const ReducerRecord = Record({
    entities: new Map({}),
    loading: false,
    loaded: false
})

const ArticleRecord = Record({
    id: null,
    text: null,
    title: null,
    date: null,
    comments: []
})

export default (state = new ReducerRecord, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return state
                .updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return state.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response, ArticleRecord))
    }

    return state
}