import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const ReducerRecord = Record({
    entities: new Map({}),
    loading: false,
    loaded: false
})

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

export default (state = new ReducerRecord, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state
                .setIn(['entities', randomId], new CommentRecord(payload.comment))

        case LOAD_ARTICLE_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            console.log("LOAD_ARTICLE_COMMENTS:::", state)
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', state.entities.merge(arrToMap(payload.response, CommentRecord)))
    }

    return state
}