import {normalizedComments as defaultComments} from '../fixtures'
import {  } from '../constants'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return state
}