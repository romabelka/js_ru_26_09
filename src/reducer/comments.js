import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT_FULLFILLED } from '../constants'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (comments = commentsMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case (ADD_COMMENT_FULLFILLED): {
            let newState = { ...comments }
            newState[payload.id] = payload
            console.log(newState)
            return newState
        }
    }

    return comments
}