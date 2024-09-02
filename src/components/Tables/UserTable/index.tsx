import React from 'react';
import { Button, Space, TableProps, Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import IUsersProps from '../../../interfaces/IUserProps';
import styles from './styles.module.css';
import TableComponent from '../TableComponent';

const UserTable: React.FC<{
  dataSource: IUsersProps[];
  pagination: TableProps<IUsersProps>['pagination'];
  onDelete: (uuid: string) => Promise<void>;
}> = ({ dataSource, pagination, onDelete }) => {
  const handleDelete = async (id: string) => {
    try {
      await onDelete(id);
      message.success('Usuário deletado com sucesso.');
    } catch (error) {
      console.log(error);
      message.error('Falha ao deletar usuário.');
    }
  };

  const okButtonProps = { className: styles.okButton }; // Define a classe CSS para o botão "Sim"
  const cancelButtonProps = { className: styles.cancelButton }; // Define a classe CSS para o botão "Não"

  const columns: TableProps<IUsersProps>['columns'] = [
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
      sorter: (a, b) => a.age - b.age,
      sortDirections: ['descend'],
    },
    {
      title: 'Data de Nascimento',
      dataIndex: 'date_birth',
      key: 'date_birth',
      render: (date_birth) => moment(date_birth).format('DD/MM/YYYY'),
      onFilter: (value, record) => record.date_birth === value,
      sorter: (a, b) => a.date_birth - b.date_birth,
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
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => moment(createdAt).format('DD/MM/YYYY HH:mm'),
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
    <TableComponent<IUsersProps>
      columns={columns}
      dataSource={dataSource.map((user) => ({ ...user, key: user.id }))}
      pagination={pagination}
    />
  );
};

export default UserTable;
