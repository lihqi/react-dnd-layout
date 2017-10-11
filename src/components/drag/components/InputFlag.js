import React, { Component } from 'react'
import Input from 'antd/lib/input'

class InputFlag extends Component {
    render() {
        return (
            <div>
                <Input 
                onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
    handleChange(event){
        this.props.setFlag(event.target.value)
    }
}

export default InputFlag