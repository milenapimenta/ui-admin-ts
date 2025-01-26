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
  const categoriesList = async () => {
    try {
      const res = await api.get('/categories/whatsapp/trending')
      setCategories(res.data.rows)
      console.log(res.data.rows)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    categoriesList()
  }, []);

  const handleDelete = async (id: number) => {
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
        name="search"
        placeholder="Busque categoria por nome..."
        className='input'
      />
      <CategoryTable
        dataSource={categories}
        onDelete={handleDelete}
      />
    </>
  );
};

export default WCategoryListPage;

