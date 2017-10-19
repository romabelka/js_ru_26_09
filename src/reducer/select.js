import { SELECT } from '../constants'

export default (selectState = [], action) => {
    const { type, payload } = action
    
    switch (type) {
        case SELECT:
            return payload    
    }

    return selectState
}