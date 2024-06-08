import React from 'react';
import { Space, TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent';
import moment from 'moment';
import ICategoriesProps from '../../interfaces/ICategoriesProps';

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
    title: 'Url',
    dataIndex: 'slug',
    key: 'slug',
    onFilter: (value, record) => record.slug.indexOf(value as string) === 0,
    sorter: (a, b) => a.slug.length - b.slug.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Visualizações',
    dataIndex: 'views',
    key: 'views',
    onFilter: (value, record) => record.views === value,
    sorter: (a, b) => a.views - b.views,
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

const CategoryTable: React.FC<{ dataSource: ICategoriesProps[]; pagination: TableProps<ICategoriesProps>['pagination'] }> = ({ dataSource, pagination }) => {
  return (
    <TableComponent<ICategoriesProps>
      columns={columns}
      dataSource={dataSource.map(user => ({ ...user, key: user.uuid }))}
      pagination={pagination}
    />
  );
};

export default CategoryTable;
