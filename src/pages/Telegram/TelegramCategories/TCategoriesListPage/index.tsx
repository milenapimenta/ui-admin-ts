import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Typography, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../../components/ButtonComponent';
import CategoryTable from '../../../../components/Tables/CategoryTable';
import api from '../../../../api';
import ICategoriesProps from '../../../../interfaces/ICategoriesProps';

const { Title } = Typography;

const TCategoryListPage: React.FC = () => {
  const [categories, setCategories] = useState<ICategoriesProps[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [search, setSearch] = useState('');

  const categoriesList = async (page: number, pageSize: number, search: string) => {
    try {
      const res = await api.get(`/categories/Telegram/trending/paginated?page=${page}&perPage=${pageSize}&search=${search}`);
      setCategories(res.data.rows.data);
      setTotal(res.data.rows.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoriesList(currentPage, pageSize, search);
  }, [currentPage, pageSize, search]);

  const handleDelete = async (id: number) => {
    try {
      const response = await api.delete(`categories/${id}`);
      if (response.status === 200) {
        const newList = categories.filter((category) => category.id !== id);
        setCategories(newList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '26px' }}>
        <Title level={3}>Categorias</Title>
        <Link to="nova">
          <ButtonComponent icon={<PlusOutlined />} text="Nova Categoria" />
        </Link>
      </div>
      <Input
        size='large'
        name="search"
        placeholder="Busque categoria por nome..."
        className='input'
        onChange={(e) => handleSearch(e.target.value)}
        value={search}
      />
      <CategoryTable
        dataSource={categories}
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

export default TCategoryListPage;
