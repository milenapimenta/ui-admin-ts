import React from 'react';
import { Table } from 'antd';
import styles from './styles.module.css';
import ITableComponentProps from '../../../interfaces/ITableProps';

function TableComponent<T extends { key: React.Key }>(props: ITableComponentProps<T>) {
  const { columns, dataSource } = props;

  return (
    <Table
      className={styles.table}
      columns={columns}
      dataSource={dataSource.map((item : any) => ({ ...item, key: item.key }))}
      pagination={{ defaultPageSize: 8, showSizeChanger: true, pageSizeOptions: ['10', '20', '40']}}
    />
  );
}

export default TableComponent;
