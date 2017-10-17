import {INCREMENT, DELETE_ARTICLE, CHANGE_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticle(filter) {
    console.log("---", filter)
    // todo не понятно как сделать чтоб было видно что содержится в payload и при этом не переписывать вот так
    return {
        type: CHANGE_FILTER,
        payload: {
            ids: filter.ids,
            from: filter.from,
            to: filter.to,
            //selected: filter.selected
            // username: filter.username
        }
    }
}