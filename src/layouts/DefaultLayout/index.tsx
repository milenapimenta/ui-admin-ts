import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const { Header, Sider, Content } = Layout;

const DefaultLayout = () => {
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(false);

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

  const getIsActivePathname = (activePathname: string) => {
    return pathname === activePathname || pathname.startsWith(activePathname + "/");
  }

  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        width={collapsed ? 110 : 250}
        collapsedWidth={100}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={selectedKeys}
        >
          {items.map(item => (
            <Menu.Item
              className={`${styles.menuItem} ${getIsActivePathname(item.key) ? styles.menuItemActive : ''}`}
              key={item.key}
              icon={item.icon}
            >
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className={styles.secondaryLayout}>
        <Header className={styles.header}>
          <Button
            className={styles.btn}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={iconStyle} /> : <MenuFoldOutlined style={iconStyle} />}
            onClick={toggleCollapsed}
          />
        </Header>
        <Content
          className={styles.content}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
