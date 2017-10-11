import { SET_GROUPITEMS } from '../actions/groupItems.js'

const initGroupItems = []

const groupItems = (state, action) => {
	if(state === undefined) {
		state = initGroupItems
	}
	switch (action.type){
		case SET_GROUPITEMS:
			return action.groupItems
			break
		default:
			return state
	}
}

export default groupItems