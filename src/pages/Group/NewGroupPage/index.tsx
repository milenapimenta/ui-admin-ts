import { useParams } from "react-router-dom";
import UserForm from "../../../components/UserForm";
import { useEffect, useState } from "react";
import api from "../../../api";

type FieldType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};
interface UserFormProps {
  handleInputChange: (fieldName: string, value: string) => void;
  onSubmit: () => void;
}

const NewUserPage = () => {
  const { uuid } = useParams<{ uuid: string }>();

  const [user, setUser] = useState<FieldType>({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const getUser = async () => {
    try {
      const response = await api.get(`/users/${uuid}`);
      setUser(prevUser => ({
        ...prevUser,
        ...response.data,
      }));
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      let response;
      if (uuid) {
        response = await api.put(`/users/${uuid}`, user);
        setUser(response.data);
      } else {
        response = await api.post('/users', user);
        setUser(response.data);
      }
      console.log("Request status:", response.status);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const handleInputChange: UserFormProps['handleInputChange'] = (fieldName, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    if (uuid) {
      getUser();
    }
  }, [uuid]);

  return (
    <>
      <UserForm
        onSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        initialValues={user}
      />
    </>
  );
};

export default NewUserPage;
