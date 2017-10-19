import { SELECT } from '../constants'

export default (selectState = null, action) => {
    const { type, payload } = action
    
    switch (type) {
        case SELECT:
            return payload    
    }

    return selectState
}