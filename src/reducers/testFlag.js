import { SET_FLAG } from '../actions/testFlag.js'

const initFlag = '默认FLAG'

const flag = (state, action) => {
	if(state === undefined) {
		state = initFlag
	}
	switch (action.type){
		case SET_FLAG:
			return action.flag
			break
		default:
			return state
	}
}

export default flag