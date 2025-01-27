import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Pagination, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../../components/ButtonComponent';
import api from '../../../../api';
import styles from './styles.module.css';
import GroupTable from '../../../../components/Tables/GroupTable';

const { Title } = Typography;

const TGroupListPage: React.FC = () => {
  const [groups, setGroups] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const getGroups = async (page: number, pageSize: number) => {
    try {
      const response = await api.get(`/groups/app/telegram/paginated?page=${page}&per_page=${pageSize}`)
      setGroups(response.data.data)
      setTotal(response.data.total)
    } catch (error) {
      console.error("Failed to fetch groups:", error);
    }
  };
  useEffect(() => {
    getGroups(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handleDelete = async (uuid: string) => {
    try {
      const response = await api.delete(`users/${uuid}`)
      if (response.status === 200) {
        const newList = groups.filter((group: any) => group.uuid !== uuid)
        setGroups(newList)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <>
      <div className={styles.container}>
        <Title level={3}>Lista de Grupos</Title>
        <Link to="/telegram/grupos/novo">
          <ButtonComponent icon={<PlusOutlined />} text="Novo Grupo" />
        </Link>
      </div>
      <Input
        size='large'
        name="search"
        placeholder="Busque grupo por X..."
        className='input'
      />
      <GroupTable
        dataSource={groups}
        onDelete={handleDelete}
      />
      <Pagination
        align="end"
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={onPageChange}
        showSizeChanger
        pageSizeOptions={['10', '15', '20', '30']}
      />
    </>
  );
};

export default TGroupListPage;
