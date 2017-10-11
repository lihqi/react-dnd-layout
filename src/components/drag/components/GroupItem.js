import React, { Component } from 'react'
import { Row, Col, Collapse } from 'antd';
import BasicDropTarget from './BasicDropTarget';

const Panel = Collapse.Panel;

class GroupItem extends Component {
    mapType(type,title) {
        switch (type) {
            case 'single':
                return <Row gutter={16}>
                    <Col span={24}><BasicDropTarget title={title}></BasicDropTarget></Col>
                </Row>;
            case 'couple':
                return <Row gutter={16}>
                    <Col span={12}><BasicDropTarget></BasicDropTarget></Col>
                    <Col span={12}><BasicDropTarget></BasicDropTarget></Col>
                </Row>;
            case 'triple':
                return <Row gutter={16}>
                    <Col span={8}><BasicDropTarget></BasicDropTarget></Col>
                    <Col span={8}><BasicDropTarget></BasicDropTarget></Col>
                    <Col span={8}><BasicDropTarget></BasicDropTarget></Col>
                </Row>;
            default: return '错误的布局类型';
        }
    }
    render() {
        let {
            title,
            type
    } = this.props;
        return (
            <div className="group-item">
                <Collapse defaultActiveKey={['1']} >
                    <Panel header={title} key="1">
                        <div>{
                            this.mapType(type,title)
                        }

                        </div>
                    </Panel>
                </Collapse>

            </div>
        )
    }
}

export default GroupItem