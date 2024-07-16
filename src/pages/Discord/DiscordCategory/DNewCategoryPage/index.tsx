import { useEffect, useState } from "react";
import CategoryForm from "../../../../components/Forms/CategoryForm";
import ICategoryFormProps from "../../../../interfaces/ICategoryFormProps";
import { useParams } from "react-router-dom";
import api from "../../../../api";
import { Typography } from "antd";

type FieldType = {
  name: string;
  slug: string;
};

const DNewCategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { Title } = Typography;

  const [category, setCategory] = useState<FieldType>({
    name: '',
    slug: '',
  });

  const getGroup = async () => {
    try {
      const response = await api.get(`/categories/${id}`);
      setCategory(prevCategory => ({
        ...prevCategory,
        ...response.data,
      }));
    } catch (error) {
      console.log("Error fetching group:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!id) {
        const response = await api.post('/categories', category);
        setCategory(response.data);
        return;
      }

      const response = await api.put(`/categories/${id}`, category);
      setCategory(response.data);
    } catch (error) {
      console.log("Error submitting form:", error);
      // exibição bonitinha pro usuário
      // vai adicionar o error no log da aplicação
    }
  };

  const handleInputChange: ICategoryFormProps['handleInputChange'] = (fieldName, value) => {
    setCategory(prevCategory => ({
      ...prevCategory,
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
        {id ? 'Editar Categoria' : 'Nova Categoria'}
      </Title>
      <CategoryForm
        onSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        initialValues={category}
      />
    </>
  );
};

export default DNewCategoryPage;
