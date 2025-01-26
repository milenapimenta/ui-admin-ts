import React from 'react';
import { Button, Space, TableProps, Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import IUsersProps from '../../../interfaces/IUserProps';
import styles from './styles.module.css';
import TableComponent from '../TableComponent';
import IUserProps from '../../../interfaces/IUserProps';

const UserTable: React.FC<{
  dataSource: IUsersProps[];
  onDelete: (id : number) => Promise<void>;
  pagination?: TableProps<IUsersProps>['pagination'];
}> = ({ dataSource, onDelete }) => {
  const handleDelete = async (id: number) => {
    try {
      await onDelete(id);
      message.success('Usuário deletado com sucesso.');
    } catch (error) {
      console.log(error);
      message.error('Falha ao deletar usuário.');
    }
  };

  const okButtonProps = { className: styles.okButton };
  const cancelButtonProps = { className: styles.cancelButton };

  const columns: TableProps<IUsersProps>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      onFilter: (value, record) => record.id === value,
      sorter: (a, b) => (a.id || 0) - (b.id || 0),
      sortDirections: ['descend'],
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['descend'],
    },
    {
      title: 'Sobrenome',
      dataIndex: 'lastname',
      key: 'lastname',
      onFilter: (value, record) => record.lastname.indexOf(value as string) === 0,
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
      sortDirections: ['descend'],
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age',
      onFilter: (value, record) => record.age === value,
      sorter: (a, b) => (a.age || 0) - (b.age || 0),
      sortDirections: ['descend'],
    },
    {
      title: 'Data de Nascimento',
      dataIndex: 'date_birth',
      key: 'date_birth',
      render: (date_birth) => moment(date_birth).format('DD/MM/YYYY'),
      onFilter: (value, record) => record.date_birth === value,
      sorter: (a, b) => moment(a.date_birth).unix() - moment(b.date_birth).unix(),
      sortDirections: ['descend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      onFilter: (value, record) => record.email.indexOf(value as string) === 0,
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ['descend'],
    },
    {
      title: 'Criado em',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (created_at) => moment(created_at).format('DD/MM/YYYY HH:mm'),
      sorter: (a, b) => moment(a.created_at).unix() - moment(b.created_at).unix(),
    },
    {
      title: 'Ações',
      key: 'action',
      render: (record) => {
        const { id, name } = record;
        return (
          <Space size="middle">
            <Link to={`${id}`}>
              <EditOutlined className={styles.icon} />
            </Link>
            <Popconfirm
              title={
                      <span>
                        {`Deseja deletar o usuário "${name}"?`}
                      </span>
                    }
              okText="Sim"
              cancelText="Não"
              onConfirm={() => handleDelete(id)}
              placement="top"
              color='#424347'
              okButtonProps={okButtonProps}
              cancelButtonProps={cancelButtonProps}
            >
              <Button type="text">
                <DeleteOutlined className={styles.trashIcon} />
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <TableComponent<IUserProps>
      columns={columns}
      dataSource={dataSource.map((user, index) => ({ ...user, key: index }))}
    />
  );
};

export default UserTable;
