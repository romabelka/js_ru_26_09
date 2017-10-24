import {START, SUCCESS, ERROR, LOAD_ALL_ARTICLES} from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action

    if (!callAPI) return next(action)

    next({
        type: type + START,
        ...rest
    })

    //dev only
    setTimeout(() => fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...rest, type: type + SUCCESS, response}))
        .catch(error => next({...rest, type: type + ERROR, error}))
    , 1000)
}