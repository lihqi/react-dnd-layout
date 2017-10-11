import React, { Component } from 'react';

import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';


import GroupItem from './GroupItem';
import Layout from './Layout';

const areaTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    let tmpArr = [...component.props.groupItems];
    tmpArr.push(item);
    component.props.setGroupItems(tmpArr);
    tmpArr = [];
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}
let onLayoutChange = function () {
  console.log('changed')
}
class ContentBoard extends Component {
  render() {
    let {
      flag,
      setFlag,
      groupItems
    } = this.props;
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div style={{
        width: '100%',
        minHeight: 280
      }}
        className="group">
        {
          groupItems.map(function (item, index) {
            return <GroupItem
              key={index}
              flag={flag}
              setFlag={setFlag}
              title={item.title}
              type={item.type}>
            </GroupItem>
          })
        }
        <Layout onLayoutChange={onLayoutChange}></Layout>
      </div>
    );
  }

}

export default DropTarget(ItemTypes.DragMenuItem, areaTarget, collect)(ContentBoard);