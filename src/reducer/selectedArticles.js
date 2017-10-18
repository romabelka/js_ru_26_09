import { SELECT_ARTICLE } from '../constants'

export default (selectedState = [], action) => {
    const {type, payload} = action
    if (!payload) return selectedState;
    const selected = payload.selected;

    switch (type) {
        case SELECT_ARTICLE:
            return selected;
    }

    return selectedState
}