import { useState } from 'react';
import {
  DiscordOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  WhatsAppOutlined,
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
      label: 'WhatsApp',
      icon: <WhatsAppOutlined style={iconStyle} />,
      key: '/whatsapp',
      submenus: [
        {
          label: 'Grupos',
          key: '/whatsapp/grupos',
        },
        {
          label: 'Categorias',
          key: '/whatsapp/categorias',
        },
      ],
    },
    {
      label: 'Discord',
      icon: <DiscordOutlined style={iconStyle} />,
      key: '/discord',
      submenus: [
        {
          label: 'Grupos',
          key: '/discord/grupos',
        },
        {
          label: 'Categorias',
          key: '/discord/categorias',
        },
      ],
    },
    {
      label: 'Telegram',
      icon: <ProfileOutlined style={iconStyle} />,
      key: '/telegram',
      submenus: [
        {
          label: 'Grupos',
          key: '/telegram/grupos',
        },
        {
          label: 'Categorias',
          key: '/telegram/categorias',
        },
      ],
    },
  ];

  const selectedKeys = items
    .filter(item => pathname.startsWith(item.key))
    .map(item => item.key);

  const openKeys = items
    .filter(item => item.submenus.some(submenu => pathname.startsWith(submenu.key)))
    .map(item => item.key);

  const getIsActivePathname = (activePathname: string) => {
    return pathname === activePathname || pathname.startsWith(activePathname + '/');
  };

  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={collapsed ? 110 : 250}
        collapsedWidth={100}
        style={{
          position: 'fixed',
          height: '100vh',
          left: 0,
          overflow: 'auto',
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={['/usuarios', '/categorias']}
        >
          {items.map(item => (
            <Menu.SubMenu
              key={item.key}
              title={
                <span>
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              }
            >
              {item.submenus.map(submenu => (
                <Menu.Item
                  key={submenu.key}
                  className={`${getIsActivePathname(submenu.key) ? styles.menuItemActive : ''}`}
                >
                  <Link to={submenu.key}>{submenu.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout className={styles.secondaryLayout} style={{ marginLeft: collapsed ? 100 : 250 }}>
        <Header className={styles.header}>
          <Button
            className={styles.btn}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={iconStyle} /> : <MenuFoldOutlined style={iconStyle} />}
            onClick={toggleCollapsed}
          />
        </Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
