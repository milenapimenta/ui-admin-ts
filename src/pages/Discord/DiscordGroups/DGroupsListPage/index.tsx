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
  const getGroups = async () => {
    try {
      const response = await api.get('/groups/app/discord');

      setGroups(response.data);
    } catch (error) {
      console.error("Failed to fetch serves:", error);
    }
  };
  useEffect(() => {
    getGroups();
  }, []);

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
        name="search"
        placeholder="Busque servidor por X..."
        className='input'
      />
      <GroupTable
        dataSource={groups}
        onDelete={handleDelete}
      />
    </>
  );
};

export default DGroupListPage;
