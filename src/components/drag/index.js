import { connect } from 'react-redux'

import Drag from './Drag'

import {setFlag} from '../../actions/testFlag'
import {setGroupItems} from '../../actions/groupItems'

const mapStateToProps = (state) => ({
	flag:state.flag,
	groupItems:state.groupItems
})

const mapDispatchToProps = (dispatch) => ({
	setFlag(flag){
		dispatch(setFlag(flag))
	},
	setGroupItems(groupItems){
		dispatch(setGroupItems(groupItems))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Drag);
