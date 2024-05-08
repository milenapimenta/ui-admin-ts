import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

const iconStyle = { fontSize: '20px'};

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        width={collapsed ? 110 : 250} // Define a largura do Sider baseado no estado collapsed
        collapsedWidth={100} // Largura quando o Sider está recolhido
      >
        <div className="demo-logo-vertical" />
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{padding: '85px 8px'}}
          >
            <Menu.Item key="1" icon={<HomeOutlined style={iconStyle}/>}>
              <Link to="/" style={{fontSize: '16px'}}>Início</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined style={iconStyle} />}>
              <Link to="usuarios" style={{fontSize: '16px'}}>Usuários</Link>
            </Menu.Item>
          </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={iconStyle} /> : <MenuFoldOutlined style={iconStyle} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '90vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
