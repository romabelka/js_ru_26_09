import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, ERROR } from '../constants'
import {arrToMap} from './utils'
import {Record} from "immutable"

const CommentRecord = new Record({
    id: null,
    user: null,
    text: null
})

export default (state = arrToMap([], CommentRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentRecord(payload.comment))
        case LOAD_COMMENTS + SUCCESS:
            return state.merge(arrToMap(payload.response, CommentRecord))

    }

    return state
}