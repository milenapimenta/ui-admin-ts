import React from 'react';
import { Space, TableProps, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent';
import IUsersProps from '../../interfaces/IUsersProps';
import moment from 'moment';

const columns: TableProps<IUsersProps>['columns'] = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name', // Chave única
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Sobrenome',
    dataIndex: 'lastname',
    key: 'lastname', // Chave única
    onFilter: (value, record) => record.lastname.indexOf(value as string) === 0,
    sorter: (a, b) => a.lastname.length - b.lastname.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Perfil',
    dataIndex: 'role',
    key: 'role', // Chave única
    onFilter: (value, record) => {
      const { role } = record;
      if (value === 'CLIENTE') {
        return role === 'CLIENTE';
      } else if (value === 'ADMIN') {
        return role === 'ADMIN';
      }
      return false;
    },
    filters: [
      { text: 'Clientes', value: 'CLIENTE' },
      { text: 'Administradores', value: 'ADMIN' },
    ],
    render: (role) => {
      const tagColor = role === 'ADMIN' ? 'red' : 'green';
      const tagText = role === 'ADMIN' ? 'ADMIN' : 'CLIENTE';
      return <Tag color={tagColor}>{tagText}</Tag>;
    },
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email', // Chave única
    onFilter: (value, record) => record.email.indexOf(value as string) === 0,
    sorter: (a, b) => a.email.length - b.email.length,
    sortDirections: ['descend'],
  },
  {
    title: 'E-mail verificado?',
    dataIndex: 'emailVerifiedAt',
    key: 'emailVerifiedAt', // Chave única
    onFilter: (value, record) => {
      const { emailVerifiedAt } = record;
      if (value === 'verified') {
        return emailVerifiedAt !== null;
      } else if (value === 'unverified') {
        return emailVerifiedAt === null;
      }
      return false;
    },
    filters: [
      { text: 'Verificados', value: 'verified' },
      { text: 'Não Verificados', value: 'unverified' },
    ],
    render: (emailVerified) => {
      const tagColor = emailVerified ? 'green' : 'red';
      const tagText = emailVerified ? 'SIM' : 'NÃO';
      return <Tag color={tagColor}>{tagText}</Tag>;
    },
  },
  {
    title: 'Criado em',
    dataIndex: 'createdAt',
    key: 'createdAt', // Chave única
    render: (createdAt) => moment(createdAt).format('DD/MM/YYYY HH:mm'),
  },
  {
    title: 'Ações',
    key: 'action', // Chave única
    render: () => (
      <Space size="middle">
        <Link to="/">
          <EditOutlined style={{ fontSize: '20px' }} />
        </Link>
        <Link to="/">
          <DeleteOutlined style={{ fontSize: '20px', color: '#BD3E33' }} />
        </Link>
      </Space>
    ),
  },
];

const UserTable: React.FC<{ dataSource: IUsersProps[]; pagination: TableProps<IUsersProps>['pagination'] }> = ({ dataSource, pagination }) => {
  return (
    <TableComponent<IUsersProps>
      columns={columns}
      dataSource={dataSource.map(user => ({ ...user, key: user.email }))}
      pagination={pagination}
    />
  );
};

export default UserTable;
