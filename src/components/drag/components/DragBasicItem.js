import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

//定义DragSource第一个参数
const DragBasicDropItemSource = {
  beginDrag(props,monitor) {
    return {   
      type:props.type,
      title:props.title   
    };
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class DragBasicDropItem extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}>
        {this.props.title}
      </div>
    );
  }
}
DragBasicDropItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.DragBasicDropItem, DragBasicDropItemSource, collect)(DragBasicDropItem);
