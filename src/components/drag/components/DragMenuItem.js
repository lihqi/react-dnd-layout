import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

//定义DragSource第一个参数
const DragMenuItemSource = {
  beginDrag(props,monitor) {
    return {   
      ...props.item  
    };
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class DragMenuItem extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}>
        {this.props.item.content.title}
      </div>
    );
  }
}
DragMenuItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.DragMenuItem, DragMenuItemSource, collect)(DragMenuItem);
