import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, LOAD_NUMBER_COMMENTS, SUCCESS, START} from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    allComments: {},
    loading: false,
    totalNumber: null
})


export default (state = new ReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            let newPagedComments = state.get('allComments')
            newPagedComments[payload.page] = payload.response.records
            let newState = state.set('allComments', newPagedComments)
            newState = newState.set('totalNumber', payload.response.total)
            return newState.set('loading', false)
    }

    return state
}