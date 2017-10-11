import React, { Component } from 'react';

import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

import LayoutContainer from './LayoutContainer';

const areaTarget = {
  drop(props, monitor, component) {
    let item = monitor.getItem().item;
    console.log(item)
    //调用子组件的onAddItem方法
    component.refs.test.onAddItem(item);
    item=null;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}
//可以监听到布局改变
 function onLayoutChange() {

}

class ContentBoard extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div style={{
        width: '100%',
        minHeight: 280
      }}
        className="group">
        <LayoutContainer onLayoutChange={onLayoutChange} ref='test'></LayoutContainer>
      </div>
    );
  }

}

export default DropTarget(ItemTypes.DragMenuItem, areaTarget, collect)(ContentBoard);