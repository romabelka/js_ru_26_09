import {normalizedComments as defaultComments} from '../fixtures'
import {  } from '../constants'

export default (state = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return state
}