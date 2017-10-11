import React, { Component } from 'react';

import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const areaTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    let tmpArr=[...component.state.basicItems];
    tmpArr.push(item);
    component.setState({
      basicItems:tmpArr
    });
    tmpArr=[];
    console.log(component.state.basicItems)
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class BasicDropTarget extends Component {
  constructor () {
    super()
    this.state = { basicItems: [
      { type: 'single', title: '单列布局容器' },
      { type: 'couple', title: '双列布局容器' },
      { type: 'triple', title: '三列布局容器' }
    ] }
  }
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div style={{
        width: '100%',
        minHeight: 40,
        background: 'red'
      }}
        className="group">
      </div>
    );
  }

}

export default DropTarget(ItemTypes.DragBasicDropItem, areaTarget, collect)(BasicDropTarget);