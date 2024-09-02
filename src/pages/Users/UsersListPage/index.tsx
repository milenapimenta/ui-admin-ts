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
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    perPage: 8,
    lastPage: 1,
  });
  const [searchValue, setSearchValue] = useState('');

  const handlePageChange = (newPage: number) => {
    setPagination({ ...pagination, page: newPage });
  };

  // const getusers = async (page: number, perPage: number, name = '') => {
  //   try {
  //     const response = name
  //       ? await api.get(`/users/${name}/name`, { params: { page, perPage } })
  //       : await api.get(`/users`, { params: { page, perPage } });

  //     const { data, pagination: pages } = response.data;

  //     setusers(data);
  //     setPagination({
  //       total: pages.total,
  //       page: pages.currentPage,
  //       perPage: pages.perPage,
  //       lastPage: pages.lastPage,
  //     });
  //   } catch (error) {
  //     console.error("Failed to fetch users:", error);
  //   }
  // };
  const usersList = async () => {
    try {
      const res = await api.get('/users');
      console.log(res);
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    usersList()
    // getusers(pagination.page, pagination.perPage, searchValue);
  }, [pagination.page, pagination.perPage, searchValue]);

  const handleDelete = async (id: string) => {
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
        <Link to="nova">
          <ButtonComponent icon={<PlusOutlined />} text="Novo usuário" />
        </Link>
      </div>
      <Input
        size='large'
        onChange={(e) => setSearchValue(e.target.value)}
        name="search"
        placeholder="Busque usuário por nome..."
      />
      <UserTable
        dataSource={users}
        pagination={{
          total: pagination.total,
          current: pagination.page,
          pageSize: pagination.perPage,
          onChange: handlePageChange,
          showSizeChanger: false,
        }}
        onDelete={handleDelete}
      />
    </>
  );
};

export default UsersListPage;

