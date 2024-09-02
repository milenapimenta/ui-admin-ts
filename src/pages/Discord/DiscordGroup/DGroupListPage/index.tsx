import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../../components/ButtonComponent';
import api from '../../../../api';
import styles from './styles.module.css';
import GroupTable from '../../../../components/Tables/GroupTable';

const { Title } = Typography;

const DGroupListPage: React.FC = () => {
  const [groups, setGroups] = useState<any>([]);
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

  const getGroups = async (page: number, perPage: number) => {
    try {
      const response = await api.get(`/groups?paginated=true`, { params: { page, perPage } });
      const { data, pagination: pages } = response.data;

      setGroups(data);
      setPagination({
        total: pages.total,
        page: pages.currentPage,
        perPage: pages.perPage,
        lastPage: pages.lastPage,
      });
    } catch (error) {
      console.error("Failed to fetch serves:", error);
    }
  };
  useEffect(() => {
    getGroups(pagination.page, pagination.perPage);
  }, [pagination.page, pagination.perPage, searchValue]);

  const handleDelete = async (id: string) => {
    try {
      const response = await api.delete(`users/${id}`)
      if (response.status === 200) {
        const newList = groups.filter((group: any) => group.id !== id)
        setGroups(newList)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Title level={3}>Lista de Servidores</Title>
        <Link to="/discord/servidores/novo">
          <ButtonComponent icon={<PlusOutlined />} text="Novo Servidor" />
        </Link>
      </div>
      <Input
        size='large'
        onChange={(e) => setSearchValue(e.target.value)}
        name="search"
        placeholder="Busque servidor por X..."
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

export default DGroupListPage;
