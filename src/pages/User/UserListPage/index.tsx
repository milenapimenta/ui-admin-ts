import { Typography } from "antd";
import TableMain from '../../../components/TableMain'

const { Title } = Typography;

const UserListPage = () => {
  return (
    <>
      <Title level={3}>Usuários</Title>
      <TableMain />

    </>
  )
}

export default UserListPage;
