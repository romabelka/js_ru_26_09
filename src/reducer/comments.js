import { LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'

import {arrToMap} from './utils'
import {Record, Map} from "immutable";

const ReducerRecord = Record({
    entities: new Map({}),
    loading: false,
    loaded: false
})

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

export default (state = new ReducerRecord, action) => {
    const { type, payload, response } = action

    switch (type) {
        /*case ADD_COMMENT:
            return {...state, [randomId]: {
                    ...payload.comment,
                    id: randomId
                }}*/

        case LOAD_ALL_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response.records, CommentRecord))
    }

    return state
}