import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../components/ButtonComponent';
import api from '../../../api';
import IUsersProps from '../../../interfaces/IUsersProps';
import styles from './styles.module.css';
import GroupTable from '../../../components/GroupTable';

const { Title } = Typography;

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<IUsersProps[]>([]);
  const [groups, setGroups] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    perPage: 10,
    lastPage: 1,
  });
  const [searchValue, setSearchValue] = useState('');

  const handlePageChange = (newPage: number) => {
    setPagination({ ...pagination, page: newPage });
  };

  const getUsers = async (page: number, perPage: number, email = '') => {
    try {
      const response = email
        ? await api.get(`/users/${email}/email`, { params: { page, perPage } })
        : await api.get(`/users`, { params: { page, perPage } });

      const { data, pagination: pages } = response.data;

      setUsers(data);
      setPagination({
        total: pages.total,
        page: pages.currentPage,
        perPage: pages.perPage,
        lastPage: pages.lastPage,
      });
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const getGroups = async () => {
    try {
      const res = await api.get('/groups?paginated=true');
      const { data } = res.data;

      setGroups(data)

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getGroups()
    getUsers(pagination.page, pagination.perPage, searchValue);
  }, [pagination.page, pagination.perPage, searchValue]);

  const handleDelete = async (uuid: string) => {
    try {
      const response = await api.delete(`users/${uuid}`)
      if (response.status === 200) {
        const newList = users.filter((user) => user.uuid !== uuid)
        setUsers(newList)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Title level={3}>Lista de Grupos</Title>
        <Link to="/usuarios/novo">
          <ButtonComponent icon={<PlusOutlined />} text="Novo Usuário" />
        </Link>
      </div>
      <Input
        size='large'
        onChange={(e) => setSearchValue(e.target.value)}
        name="search"
        placeholder="Busque usuário por e-mail..."
      />
      <GroupTable
        dataSource={groups}
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

export default UserListPage;
