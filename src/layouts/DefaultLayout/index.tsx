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

  const getIsActivePathname = (activePathname: string) => {
    return pathname === activePathname || pathname.startsWith(activePathname + '/');
  };

  const items = [
    {
      label: 'WhatsApp',
      icon: <WhatsAppOutlined className={styles.icon} />,
      key: '/whatsapp',
      submenus: [
        {
          label:
          (
            <div
              key="/whatsapp/grupos"
              className={getIsActivePathname('/whatsapp/grupos') ? styles.menuItemActive : styles.menuItem}
            >
              <Link to='/whatsapp/grupos'>Grupos</Link>
            </div>
          ),
          key: '/whatsapp/grupos',
        },
        {
          label:
        (
          <div
            key="/whatsapp/categorias"
            className={getIsActivePathname('/whatsapp/categorias') ? styles.menuItemActive : styles.menuItem}
          >
            <Link to='/whatsapp/categorias'>Categorias</Link>
          </div>
        ),
          key: '/whatsapp/categorias',
        },
      ],
    },
    {
      label: 'Discord',
      icon: <DiscordOutlined className={styles.icon} />,
      key: '/discord',
      submenus: [
        {
          label:
          (
            <div
              key="/discord/grupos"
              className={getIsActivePathname('/discord/grupos') ? styles.menuItemActive : styles.menuItem}
            >
              <Link to='/discord/grupos'>Grupos</Link>
            </div>
          ),
          key: '/discord/grupos',
        },
        {
          label:
          (
            <div
              key="/discord/categorias"
              className={getIsActivePathname('/discord/categorias') ? styles.menuItemActive : styles.menuItem}
            >
              <Link to='/discord/categorias'>Categorias</Link>
            </div>
          ),
          key: '/discord/categorias',
        },
      ],
    },
    {
      label: 'Telegram',
      icon: <ProfileOutlined className={styles.icon} />,
      key: '/telegram',
      submenus: [
        {
          label:
          (
            <div
              key="/telegram/grupos"
              className={getIsActivePathname('/telegram/grupos') ? styles.menuItemActive : styles.menuItem}
            >
              <Link to='/telegram/grupos'>Grupos</Link>
            </div>
          ),
          key: '/telegram/grupos',
        },
        {
          label:  (
            <div
              key="/telegram/categorias"
              className={getIsActivePathname('/telegram/categorias') ? styles.menuItemActive : styles.menuItem}
            >
              <Link to='/telegram/categorias'>Categorias</Link>
            </div>
          ),
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

  const generateMenuItems = (items: any) => {
    return items.map((item: any) => ({
      ...item,
      children: item.submenus.map((submenu: any) => ({
        ...submenu,
        key: submenu.key.toString(),
      })),
      key: item.key.toString(),
    }));
  };

  const menuItems = generateMenuItems(items);

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
          defaultSelectedKeys={['/whatsapp/grupos']}
          defaultOpenKeys={openKeys}
          items={menuItems}
        />
      </Sider>
      <Layout className={styles.secondaryLayout} style={{ marginLeft: collapsed ? 100 : 250 }}>
        <Header className={styles.header}>
          <Button
            className={styles.btn}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined className={styles.icon} /> : <MenuFoldOutlined className={styles.icon} />}
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
