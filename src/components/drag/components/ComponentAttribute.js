import React, { Component } from 'react';


class ComponentAttribute extends Component {
    render() {
        let {
            currentComponent
        } = this.props
        return (
            <div className="component-attribute">
                {currentComponent.name?currentComponent.name:null}
            </div>
        )
    }
}
export default ComponentAttribute;