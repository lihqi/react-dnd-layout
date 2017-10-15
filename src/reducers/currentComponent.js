import { SELECT_COMPONENT } from '../actions/currentComponent.js'

const initComponent = ''
const currentComponent = (state, action) => {
	if(state === undefined) {
		state = initComponent
	}
	switch (action.type){
		case SELECT_COMPONENT:
			return action.componentType
			break
		default:
			return state
	}
}

export default currentComponent