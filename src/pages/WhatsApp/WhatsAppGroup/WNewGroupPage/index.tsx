import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../api";
import GroupForm from "../../../../components/Forms/GroupForm";
import IGroupFormProps from "../../../../interfaces/IGroupFormProps";
import { Typography } from "antd";

type FieldType = {
  name: string;
  username: string;
  description: string;
};

const WNewGroupPage = () => {
  const { id } = useParams<{ id: string }>();
  const { Title } = Typography;

  const [group, setGroup] = useState<FieldType>({
    name: '',
    username: '',
    description: ''
  });

  const getGroup = async () => {
    try {
      const response = await api.get(`/groups/${id}`);
      setGroup(prevGroup => ({
        ...prevGroup,
        ...response.data,
      }));
    } catch (error) {
      console.log("Error fetching group:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      let response;
      if (id) {
        response = await api.put(`/groups/${id}`, group);
        setGroup(response.data);
      } else {
        response = await api.post('/groups', group);
        setGroup(response.data);
      }
      console.log("Request status:", response.status);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const handleInputChange: IGroupFormProps['handleInputChange'] = (fieldName, value) => {
    setGroup(prevUser => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    if (id) {
      getGroup();
    }
  }, [id]);

  return (
    <>
      <Title style={{ marginBottom: '48px' }} level={3}>
        {id ? 'Editar Grupo' : 'Novo Grupo'}
      </Title>
      <GroupForm
        onSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        initialValues={group}
      />
    </>
  );
};

export default WNewGroupPage;
