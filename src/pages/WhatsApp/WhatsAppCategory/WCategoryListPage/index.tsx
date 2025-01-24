import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../../components/ButtonComponent';
import CategoryTable from '../../../../components/Tables/CategoryTable'
import api from '../../../../api';
import ICategoriesProps from '../../../../interfaces/ICategoriesProps';

const { Title } = Typography;

const WCategoryListPage: React.FC = () => {
  const [categories, setCategories] = useState<ICategoriesProps[]>([]);
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

  // const getCategories = async (page: number, perPage: number, name = '') => {
  //   try {
  //     const response = name
  //       ? await api.get(`/categories/${name}/name`, { params: { page, perPage } })
  //       : await api.get(`/categories`, { params: { page, perPage } });

  //     const { data, pagination: pages } = response.data;

  //     setCategories(data);
  //     setPagination({
  //       total: pages.total,
  //       page: pages.currentPage,
  //       perPage: pages.perPage,
  //       lastPage: pages.lastPage,
  //     });
  //   } catch (error) {
  //     console.error("Failed to fetch Categories:", error);
  //   }
  // };
  const categoriesList = async () => {
    try {
      const res = await api.get('/categories/whatsapp/trending')
      setCategories(res.data.rows)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    categoriesList()
    // getCategories(pagination.page, pagination.perPage, searchValue);
  }, [pagination.page, pagination.perPage, searchValue]);

  const handleDelete = async (id: string) => {
      try {
        const response = await api.delete(`categories/${id}`)
        if (response.status === 200) {
          const newList = categories.filter((category) => category.id !== id)
          setCategories(newList)
        }
      } catch (error) {
        console.log(error)
      }
    }

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
        onChange={(e) => setSearchValue(e.target.value)}
        name="search"
        placeholder="Busque categoria por nome..."
        className='input'
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
        onDelete={handleDelete}
      />
    </>
  );
};

export default WCategoryListPage;

