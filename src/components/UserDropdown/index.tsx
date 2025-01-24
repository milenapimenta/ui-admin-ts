import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate

const UserDropdown = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem('username') || 'Usuário';

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const items: MenuProps['items'] = [
    {
      label: 'Sair',
      key: '2',
      icon: <LogoutOutlined />,
      onClick: (e) => {
        e.domEvent.preventDefault();
        handleLogout();
      },
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <Dropdown.Button menu={menuProps} icon={<DownOutlined />} placement="bottom">
      Olá, {username}!
    </Dropdown.Button>
  );
};

export default UserDropdown;
