import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_COMMENTS, START, SUCCESS, ERROR } from '../constants'
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
    loading: false,
    comments: [],
    loadingComments: false,
    loadedComments: false
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

        case LOAD_ARTICLE + START:
            return state.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return state.setIn(['entities', payload.id], new ArticleRecord(payload.response))

        case LOAD_COMMENTS + START:
            return state.setIn(['entities', payload.articleId, 'loadingComments'], true)

        case LOAD_COMMENTS + SUCCESS:
            return state.setIn(['entities', payload.articleId, 'loadingComments'], false)
                .setIn(['entities', payload.articleId, 'loadedComments'], true)

        case LOAD_COMMENTS + ERROR:
            return state.setIn(['entities', payload.articleId, 'loadingComments'], false)
                .setIn(['entities', payload.articleId, 'loadedComments'], false) // todo обработка/сообщение
    }

    return state
}