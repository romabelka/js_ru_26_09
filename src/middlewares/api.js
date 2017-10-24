export default store => next => action => {
    const {callAPI, ...rest} = action

    if (!callAPI) return next(action)

    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...rest, response}))
}