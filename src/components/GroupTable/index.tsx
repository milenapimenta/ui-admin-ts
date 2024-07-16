import React from 'react';
import { Button, Space, TableProps, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent';
import IGroupsProps from '../../interfaces/IGroupsProps';
import moment from 'moment';
import styles from './styles.module.css';

const GroupTable:
  React.FC<
    {
      dataSource: IGroupsProps[];
      pagination: TableProps<IGroupsProps>['pagination'];
      onDelete: (id: string) => Promise<void>
    }
  > = ({ dataSource, pagination, onDelete}) => {

  const columns: TableProps['columns'] = [
    {
      title: 'Nome',
      dataIndex: 'limited_name',
      key: 'limited_name',
      onFilter:
        (value, record) =>
          record.name.indexOf(value as string) === 0,
      sorter:
        (a, b) =>
          a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      onFilter:
        (value, record) =>
          record.username.indexOf(value as string) === 0,
      sorter:
        (a, b) =>
          a.username.length - b.username.length,
      sortDirections: ['descend'],
    },
    {
      title: 'É premium?',
      dataIndex: 'is_premium',
      key: 'is_premium',
      onFilter: (value, record) => {
        const { is_premium } = record;
        if (value === false) {
          return is_premium === 'NÃO';
        }
        if (value === true) {
          return is_premium === 'SIM';
        }
        return false;
      },
      filters: [
        { text: 'SIM', value: true },
        { text: 'NÃO', value: false },
      ],
      render: (is_premium) => {
        const tagColor = is_premium === false ? 'gray' : 'red';
        const bgColor = is_premium === false ? '#424347' : '#fc3a46';
        const borderColor = is_premium === false ? '#424347' : '#fc3a46';
        const tagText = is_premium === false ? 'NÃO' : 'SIM';
        return <Tag
                  style=
                  {
                    {
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      fontWeight: 'bold'
                    }
                  }
                  color={tagColor}
                >
                  {tagText}
                </Tag>;
      },
    },
    {
      title: 'É aberto?',
      dataIndex: 'is_open',
      key: 'is_open',
      onFilter: (value, record) => {
        const { is_open } = record;
        if (value === true) {
          return is_open !== false;
        }
        if (value === false) {
          return is_open ===  true;
        }
        return false;
      },
      filters: [
        { text: 'Abertos', value: 'open' },
        { text: 'Fechados', value: 'closed' },
      ],
      render: (is_open) => {
        const tagColor = is_open ? 'green' : 'gray';
        const bgColor = is_open === false ? '#424347' : 'green';
        const borderColor = is_open === false ? '#424347' : 'green';
        const tagText = is_open ? 'SIM' : 'NÃO';
        return <Tag
                  style=
                  {
                    {
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      fontWeight: 'bold'
                    }
                  }
                  color={tagColor}
                >
                  {tagText}
                </Tag>;
      },
    },
    {
      title: 'Está ativo?',
      dataIndex: 'is_open',
      key: 'is_open',
      onFilter: (value, record) => {
        const { is_open } = record;
        if (value === true) {
          return is_open !== false;
        } else if (value === false) {
          return is_open ===  true;
        }
        return false;
      },
      filters: [
        { text: 'Abertos', value: 'is_open' },
        { text: 'Fechados', value: 'isnt_open' },
      ],
      render: (is_open) => {
        const tagColor = is_open ? 'green' : 'gray';
        const bgColor = is_open === false ? '#424347' : 'green';
        const borderColor = is_open === false ? '#424347' : 'green';
        const tagText = is_open ? 'SIM' : 'NÃO';
        return <Tag
                  style=
                  {
                    {
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      fontWeight: 'bold'
                    }
                  }
                  color={tagColor}
                >
                  {tagText}
                </Tag>;
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
      render: (record) => {
        const { id } = record;
        return (
          <Space size="middle">
          <Link to={`${id}`}>
            <EditOutlined className={styles.icon} />
          </Link>
          <Button
            onClick={() => onDelete(id)}
            type='text'
          >
            <DeleteOutlined className={styles.iconTrash} />
          </Button>
        </Space>
        )
    },
    },
  ];

  return (
    <TableComponent<IGroupsProps>
      columns={columns}
      dataSource={dataSource.map(group =>
        (
          {
             ...group,
            key: group.username
          }
        ))}
      pagination={pagination}
    />
  );
};

export default GroupTable;
