import { connect } from 'react-redux'

import Drag from './Drag'

import {setFlag} from '../../actions/testFlag'
import {setGroupItems} from '../../actions/groupItems'
import {selectComponent} from '../../actions/currentComponent'
const mapStateToProps = (state) => ({
	flag:state.flag,
	groupItems:state.groupItems,
	currentComponent:state.currentComponent
})

const mapDispatchToProps = (dispatch) => ({
	setFlag(flag){
		dispatch(setFlag(flag))
	},
	setGroupItems(groupItems){
		dispatch(setGroupItems(groupItems))
	},
	selectComponent(el){
		dispatch(selectComponent(el))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Drag);
