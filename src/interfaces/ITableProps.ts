import { TableProps} from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ColumnsType } from 'antd/es/table';

export default interface ITableComponentProps<T extends AnyObject> {
  columns: ColumnsType<T>;
  dataSource: T[];
  pagination?: TableProps<T>['pagination'];
}
