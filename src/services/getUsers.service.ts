import api from "../api";

const getUsers = () => {
  try {
    const response = api.get('/users');
    return response;

  } catch (error) {
    console.log(error);
  }
}

export default getUsers;
