import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';

import DragMenuItem from './components/DragMenuItem';

import ContentBoard from './components/ContentBoard';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Drag extends Component {
  render() {
    let items=[
      {
        configOptions:{
          minW:2,
          maxW:4
        },
        content:{
          type: 'single', 
          title: '最小宽度2，最大宽度4'
        }
      },
      {
        configOptions:{
          minH:2,
          maxH:4
        },
        content:{
          type: 'single', 
          title: '最小高度2，最大宽度4'
        }
      },
    ]
    // let items = [
    //   { type: 'single', title: '单列布局容器' },
    //   { type: 'couple', title: '双列布局容器' },
    //   { type: 'triple', title: '三列布局容器' },
    //   { type: 'text', title: '单行文本' },
    //   { type: 'number', title: '数字文本' },
    //   { type: 'currency', title: '货币文本' },
    //   { type: 'date', title: '日期文本' },
    //   { type: 'select', title: '下拉框' },
    //   { type: 'link', title: '链接' },
    // ];
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
              <SubMenu key="sub1" title={<span><Icon type="user" />可拖拽控件</span>}>
                {
                  items.map(function (item,index) {
                    return <Menu.Item key={index}>
                      <DragMenuItem item={item}></DragMenuItem>
                    </Menu.Item>
                  })
                }
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <ContentBoard>
              </ContentBoard>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default Drag