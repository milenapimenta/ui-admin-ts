import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../../../components/ButtonComponent';
import api from '../../../../api';
import styles from './styles.module.css';
import GroupTable from '../../../../components/Tables/GroupTable';

const { Title } = Typography;

const WGroupListPage: React.FC = () => {
  const [groups, setGroups] = useState<any>([]);
  const getGroups = async () => {
    try {
      const response = await api.get('/groups/app/whatsapp')
      console.log(response.data)

      setGroups(response.data)
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };
  useEffect(() => {
    getGroups();
  }, []);

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

  return (
    <>
      <div className={styles.container}>
        <Title level={3}>Lista de Grupos</Title>
        <Link to="/whatsapp/grupos/novo">
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
    </>
  );
};

export default WGroupListPage;
