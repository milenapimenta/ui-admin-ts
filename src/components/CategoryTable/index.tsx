import React from 'react';
import { Button, Space, TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent';
import moment from 'moment';
import ICategoriesProps from '../../interfaces/ICategoriesProps';
import styles from './styles.module.css';

const CategoryTable: React.FC<{ dataSource: ICategoriesProps[]; pagination: TableProps<ICategoriesProps>['pagination']; onDelete: (uuid: string) => Promise<void> }> = ({ dataSource, pagination, onDelete }) => {
  const columns: TableProps<ICategoriesProps>['columns'] = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      onFilter: (value, record) => record.slug.indexOf(value as string) === 0,
      sorter: (a, b) => a.slug.length - b.slug.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Total de grupos',
      dataIndex: 'groups_count',
      key: 'groups_count',
      onFilter: (value, record) => record.groups_count === value,
      sorter: (a, b) => a.groups_count - b.groups_count,
      sortDirections: ['descend'],
    },
    {
      title: 'Criado em',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => moment(createdAt).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Ações',
      key: 'action',
      render: (record) => {
        const {id} = record;
        return (
          <Space size="middle">
          <Link to={`${id}`}>
            <EditOutlined className={styles.icon} />
          </Link>
          <Button
            onClick={() => onDelete(id)}
            type='text'
          >
            <DeleteOutlined className={styles.trashIcon} />
          </Button>
        </Space>
        )
      },
    },
  ];

  return (
    <TableComponent<ICategoriesProps>
      columns={columns}
      dataSource={dataSource.map(category => ({ ...category, key: category.id }))}
      pagination={pagination}
    />
  );
};

export default CategoryTable;
