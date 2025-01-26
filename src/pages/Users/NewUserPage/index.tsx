import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import api from "../../../api";
import IUserFormProps from "../../../interfaces/IUserFormProps";
import UserForm from "../../../components/Forms/UserForm";
import IUserProps from "../../../interfaces/IUserProps";

const NewUserPage = () => {
  const { id } = useParams<{ id: string }>();
  const { Title } = Typography;

  const [user, setUser] = useState<IUserProps>({
    name: '',
    lastname: '',
    email: '',
    date_birth: '',
    password: '',
  });

  const getUser = async () => {
    try {
      const response = await api.get(`/users/${id}`);

      if (response.data) {
        setUser({
          name: response.data.name || '',
          lastname: response.data.lastname || '',
          email: response.data.email || '',
          date_birth: response.data.date_birth || '',
          password: response.data.password || ''
        });
      } else {
        console.log("Nenhum dado encontrado para o usuário.");
      }

      console.log(response.data);  // Isso vai ajudar a verificar o que vem da API
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!id) {
        const response = await api.post('/users', user);
        setUser(response.data);
        return;
      }

      const response = await api.put(`/users/${id}`, user);
      setUser(response.data);
    } catch (error) {
      console.log("Error submitting form:", error);
      // Exibição de erro personalizada pode ser feita aqui
    }
  };

  const handleInputChange: IUserFormProps['handleInputChange'] = (fieldName, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);

  return (
    <>
      <Title style={{ marginBottom: '48px' }} level={3}>
        {id ? 'Editar Usuário' : 'Novo Usuário'}
      </Title>
      <UserForm
        onSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        initialValues={user}
      />
    </>
  );
};

export default NewUserPage;
