import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS, ERROR } from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    total: 0,
    pages: new OrderedMap({}), // pageNum - [mass of comments ids]
    pageLimit: 5,
    loading: false,
    loaded: false
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))
        case LOAD_COMMENTS + START:
            return state.set('loading', true).set('loaded', false)
        case LOAD_COMMENTS + SUCCESS:
            const newComments = arrToMap(payload.response, CommentRecord)
            return state
                .setIn(['pages', payload.pageNum], newComments.keySeq().toArray())
                .mergeIn(['entities'], newComments)
                .set('loading', false)
                .set('loaded', true)
                .set('total', payload.total)
        case LOAD_COMMENTS + ERROR:
            return state.set('loading', false).set('loaded', false)
    }

    return state
}