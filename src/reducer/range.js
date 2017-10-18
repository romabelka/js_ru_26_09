import {CHANGE_RANGE} from '../constants'

export default (state = {from: null, to: null}, action) => {
	console.log(action);
	if (!action.payload) {
		return state;
	}
	const {type, payload} = action;

    return action.type === CHANGE_RANGE ? payload.range: state
}