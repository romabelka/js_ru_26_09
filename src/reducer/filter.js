import {CHANGE_FILTER} from '../constants'

export default (filter = {}, action) => {
    const {type, payload} = action

    console.log("---action=", action)
    switch (type) {
        case CHANGE_FILTER:
            return payload

    }

    return filter
}