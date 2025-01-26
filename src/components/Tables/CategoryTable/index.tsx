import React from 'react';
import { Button, Space, TableProps, Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent';
import moment from 'moment';
import ICategoriesProps from '../../../interfaces/ICategoriesProps';
import styles from './styles.module.css';

const CategoryTable: React.FC<{
  dataSource: ICategoriesProps[];
  onDelete: (id: number) => Promise<void>;
}> = ({ dataSource, onDelete }) => {
  const handleDelete = async (id: number) => {
    try {
      await onDelete(id);
      message.success('Categoria deletada com sucesso.');
    } catch (error) {
      console.log(error);
      message.error('Falha ao deletar a categoria.');
    }
  };

  const okButtonProps = { className: styles.okButton };
  const cancelButtonProps = { className: styles.cancelButton };

  const columns: TableProps<ICategoriesProps>['columns'] = [
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
      sortDirections: ['ascend'],
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      onFilter: (value, record) => record.slug.indexOf(value as string) === 0,
      sorter: (a, b) => a.slug.localeCompare(b.slug),
      sortDirections: ['ascend'],
    },
    {
      title: 'Total de grupos',
      dataIndex: 'groups_count',
      key: 'groups_count',
      onFilter: (value, record) => record.groups_count === value,
      sorter: (a, b) => a.groups_count - b.groups_count,
      sortDirections: ['ascend'],
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
                        {`Deseja deletar a categoria "${name}"?`}
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
    <TableComponent<ICategoriesProps>
      columns={columns}
      dataSource={dataSource.map((category) => ({ ...category, key: category.id }))}
      pagination={{ defaultPageSize: 8, showSizeChanger: true, pageSizeOptions: ['10', '20', '40']}}
    />
  );
};

export default CategoryTable;
