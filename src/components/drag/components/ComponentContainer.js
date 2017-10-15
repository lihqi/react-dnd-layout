import React, { Component } from 'react';


class ComponentContainer extends Component {
    render() {
        let {
            i,
            el,
            onRemoveItem,
            removeStyle
        } = this.props
        //currentComponent
        return (
            <div key={i} >
                {<span className="remove" style={removeStyle} onClick={onRemoveItem}>x</span>}
                {el.name}
            </div>
        )
    }
}
export default ComponentContainer;