import { SELECT_COMPONENT } from '../actions/currentComponent.js'

const initComponent = {
	componentType: '',
	name: '',
	w: 4,
	h: 2,
	minW: 4,
	maxW: 4,
	minH: 2,
	maxH: 4
  }
const currentComponent = (state, action) => {
	if(state === undefined) {
		state = initComponent
	}
	switch (action.type){
		case SELECT_COMPONENT:
			return action.el
			break
		default:
			return state
	}
}

export default currentComponent