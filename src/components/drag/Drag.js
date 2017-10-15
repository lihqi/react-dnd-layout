import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';

import DragMenuItem from './components/DragMenuItem';

import ContentBoard from './components/ContentBoard';

import AddRemoveLayout from './components/demo-component'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Drag extends Component {
  
  render() {
    let self=this
    let items = [
      {
        //组件类型
        componentType: 'email',
        //组件名称
        name: '电子邮件',
        //组件宽度-以格子为单位 一个格子32px
        w: 4,
        //组件高度-以格子为单位 一个格子32px
        h: 4,
        //组件最小宽度-以格子为单位 一个格子32px
        minW: 4,
        //组件最大宽度-以格子为单位 一个格子32px
        maxW: 10,
        //组件最小高度-以格子为单位 一个格子32px
        minH: 4,
        //组件最大高度-以格子为单位 一个格子32px
        maxH: 7
      },
      {
        componentType: 'attendance',
        name: '个人考勤',
        w: 4,
        h: 2,
        minW: 4,
        maxW: 4,
        minH: 2,
        maxH: 4
      },
      {
        componentType: 'address',
        name: '通讯簿',
        w: 4,
        h: 2,
        minW: 4,
        maxW: 4,
        minH: 2,
        maxH: 4
      },
      {
        componentType: 'shortcut',
        name: '快捷菜单',
        w: 4,
        h: 2,
        minW: 4,
        maxW: 4,
        minH: 2,
        maxH: 4
      },
      {
        componentType: 'vote',
        name: '投票',
        w: 4,
        h: 2,
        minW: 4,
        maxW: 4,
        minH: 2,
        maxH: 4
      },
      {
        componentType: 'wait_handle',
        name: '统一待办',
        w: 4,
        h: 2,
        minW: 4,
        maxW: 4,
        minH: 2,
        maxH: 4
      },
      {
        componentType: 'workflow',
        name: '我的工作',
        w: 4,
        h: 2,
        minW: 4,
        maxW: 4,
        minH: 2,
        maxH: 4
      },
    ]
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />所有组件</span>}>
                {
                  items.map(function (item, index) {
                    return <Menu.Item key={index}>
                      <DragMenuItem item={item}></DragMenuItem>
                    </Menu.Item>
                  })
                }
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ background: '#fff', margin: 0, minHeight: 280 }}>
             <ContentBoard style={{ width: 1024 }} {...self.props}>
              </ContentBoard>
              {/* <AddRemoveLayout style={{ width: 1024 }}>
              </AddRemoveLayout> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default Drag