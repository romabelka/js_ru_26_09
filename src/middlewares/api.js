import {START, SUCCESS, ERROR} from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action

    if (!callAPI) return next(action)
    console.log("callAPI:", callAPI);
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