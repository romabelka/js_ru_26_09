import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {arrToMap, fillList} from './utils'
import {OrderedMap, Map, Record, List} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    entitiesIdList: new List(),
    loading: false
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId, offset } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .updateIn(['entitiesIdList'], list => fillList(
                    list,
                    offset,
                    response.total,
                    response.records.reduce((acc, item) => acc.push(item.id), new List())
                ))
    }

    return state
}