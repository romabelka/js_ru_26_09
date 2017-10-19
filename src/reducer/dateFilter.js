import { APPLY_DATE_FILTER } from '../constants'

export default (dateFilterState = {
    from: null,
    to: null
}, action) => {

    const {type, payload} = action

    switch (type) {

        case APPLY_DATE_FILTER:
            const {from, to} = payload.dateRange
            return {
                from,
                to
            }
        break;
    }

    return dateFilterState
}