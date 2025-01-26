import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../components/ButtonComponent';
import api from '../../../api';
import IUserProps from '../../../interfaces/IUserProps';
import UserTable from '../../../components/Tables/UserTable';

const { Title } = Typography;

const UsersListPage: React.FC = () => {
  const [users, setUsers] = useState<IUserProps[]>([]);
  const usersList = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data.data);
      console.log(res.data.data)
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  useEffect(() => {
    usersList()
  }, []);

  const handleDelete = async (id: number) => {
      try {
        const response = await api.delete(`users/${id}`)
        if (response.status === 200) {
          const newList = users.filter((user) => user.id !== id)
          setUsers(newList)
        }
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '26px' }}>
        <Title level={3}>Usuários</Title>
        <Link to="novo">
          <ButtonComponent icon={<PlusOutlined />} text="Novo usuário" />
        </Link>
      </div>
      <Input
        size='large'
        name="search"
        placeholder="Busque usuário por nome..."
        className='input'
      />
      <UserTable
        dataSource={users}
        onDelete={handleDelete}
      />
    </>
  );
};

export default UsersListPage;

