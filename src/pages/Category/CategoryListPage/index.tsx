import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../components/ButtonComponent';
import CategoryTable from '../../../components/CategoryTable'
import api from '../../../api';
import ICategoriesProps from '../../../interfaces/ICategoriesProps';

const { Title } = Typography;

const CategoryListPage: React.FC = () => {
  const [categories, setCategories] = useState<ICategoriesProps[]>([]);
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

  const getCategories = async (page: number, perPage: number, email = '') => {
    try {
      const response = email
        ? await api.get(`/categories/${email}/email`, { params: { page, perPage } })
        : await api.get(`/categories`, { params: { page, perPage } });

      const { data, pagination: pages } = response.data;

      setCategories(data);
      setPagination({
        total: pages.total,
        page: pages.currentPage,
        perPage: pages.perPage,
        lastPage: pages.lastPage,
      });
    } catch (error) {
      console.error("Failed to fetch Categories:", error);
    }
  };

  useEffect(() => {
    getCategories(pagination.page, pagination.perPage, searchValue);
  }, [pagination.page, pagination.perPage, searchValue]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '26px' }}>
        <Title level={3}>Usuários</Title>
        <Link to="/usuarios/novo">
          <ButtonComponent icon={<PlusOutlined />} text="Novo Usuário" />
        </Link>
      </div>
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        name="search"
        placeholder="Busque categoria por nome..."
      />
      <CategoryTable
        dataSource={categories}
        pagination={{
          total: pagination.total,
          current: pagination.page,
          pageSize: pagination.perPage,
          onChange: handlePageChange,
          showSizeChanger: false,
        }}
      />
    </>
  );
};

export default CategoryListPage;

