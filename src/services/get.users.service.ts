import api from "../api";
import IUsersProps from '../interfaces/IUsersProps';

const getUsers = async () => {
  try {
    const { data } = await api.get('/users');
    const users = data.data;

    const transformedUsers = users.map((user: IUsersProps, index: number) => {

      const role = user.role === 'CLIENT' ? 'CLIENTE' : 'ADMIN';

      return {
        ...user,
        role: role,
        key: index,
      };
    });

    return transformedUsers;

  } catch (error) {
    console.log(error);
  }
}

export default getUsers;
