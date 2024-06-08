import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DefaultLayout = () => {
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const iconStyle = { fontSize: '20px' };

  const items = [
    {
      label: 'Usuários',
      icon: <UserOutlined style={iconStyle} />,
      key: '/usuarios',
    },
    {
      label: 'Categorias',
      icon: <ProfileOutlined style={iconStyle} />,
      key: '/categorias',
    }
  ];

  const selectedKeys = items
    .filter(item => pathname.startsWith(item.key))
    .map(item => item.key);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        width={collapsed ? 110 : 250}
        collapsedWidth={100}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          style={{ padding: '85px 14px' }}
        >
          {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={iconStyle} /> : <MenuFoldOutlined style={iconStyle} />}
            onClick={toggleCollapsed}
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
            minHeight: '95vh',
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
