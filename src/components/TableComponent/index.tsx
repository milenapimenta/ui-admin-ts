import React from 'react';
import { Table } from 'antd';
import ITableComponentProps from '../../interfaces/ITableProps';
import styles from './styles.module.css';

function TableComponent<T extends { key: React.Key }>(props: ITableComponentProps<T>) {
  const { columns, dataSource, pagination } = props;

  return (
    <Table
      className={styles.table}
      columns={columns}
      dataSource={dataSource.map(item => ({ ...item, key: item.key }))}
      pagination={pagination}
    />
  );
}

export default TableComponent;
