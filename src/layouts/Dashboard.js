import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import HelixLogo from '../assets/images/helixsoftware.png'
import Tables from '../views/Tables'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Dashboard extends Component {

    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
     };
        
      
    render() {
        let collapsedValue = this.state.collapsed;
        return (
      <Layout>
        <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsedValue} 
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={collapsedValue => {
            // collapsedValue = !collapsedValue;
            // this.state.collapsed = collapsedValue;
            // console.log(this.state.collapsed)
            this.setState({
                collapsed: collapsedValue
            });
      }}
    //   onCollapse={(collapsed, type) => {
    //     console.log(collapsed, type);
    //   }}
      >
          <div className="logo" >
             <img src={HelixLogo} alt="Helix Logo" /> 
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>Navigation 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>Navigation 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>Navigation 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>Navigation 4</span>
                </span>
              }
            >
              <Menu.Item key="Navigation 4-1">Tom</Menu.Item>
              <Menu.Item key="Navigation 4-2">Bill</Menu.Item>
              <Menu.Item key="Navigation 4-3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <UserOutlined />
                  <span>Navigation 5</span>
                </span>
              }
            >
              <Menu.Item key="Navigation 5-1">Tom</Menu.Item>
              <Menu.Item key="Navigation 5-2">Bill</Menu.Item>
              <Menu.Item key="Navigation 5-3">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 10px',
              padding: 8,
              minHeight: 280,
            }}
          >
            <Tables/>
          </Content>
        </Layout>
      </Layout>
        )
    }
}
