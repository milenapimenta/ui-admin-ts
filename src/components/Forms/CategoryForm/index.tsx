import styles from './styles.module.css';
import InputComponent from "../../InputComponent";
import ButtonComponent from "../../ButtonComponent";
import { Form } from "antd";
import ICategoryFormProps from '../../../interfaces/ICategoryFormProps.ts';

const CategoryForm: React.FC<ICategoryFormProps> =
  (
    {
      handleInputChange,
      onSubmit,
      initialValues
    }
  ) => {

  // Converte initialValues para o formato esperado pelo Ant Design (array de objetos)
  const safeInitialValues = [
    { name: ['name'], value: initialValues?.name || '' },
    { name: ['slug'], value: initialValues?.slug || '' }
  ];

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      fields={safeInitialValues}  // Passando os valores no formato correto para `fields`
      onFieldsChange={(_, allFields) => {
        // Atualizando os valores dos campos conforme eles mudam
        allFields.forEach((field) => {
          handleInputChange(field.name[0], field.value); // Passando nome e valor do campo
        });
      }}
    >
      <div className={styles.form}>
        <div className={styles.input}>
          <Form.Item
            label={<div className={styles.formItem}>Nome</div>}
            name="name"
            rules={[{ required: true, message: 'O campo nome é obrigatório!' }]}
          >
            <InputComponent
              size="large"
              onChange={(e) => handleInputChange('name', e.target.value)}  // Chama a função com nome e valor
              value={initialValues?.name || ''}  // Garantindo que o valor inicial seja corretamente passado
            />
          </Form.Item>
        </div>

        <div style={{ width: '49%' }}>
          <Form.Item
            label={<div className={styles.formItem}>Slug</div>}
            name="slug"
            rules={[{ required: true,  message: 'O campo slug é obrigatório!'}]}
          >
            <InputComponent
              size="large"
              onChange={(e) => handleInputChange('slug', e.target.value)}  // Chama a função com nome e valor
              value={initialValues?.slug || ''}  // Garantindo que o valor inicial seja corretamente passado
            />
          </Form.Item>
        </div>
      </div>

      <Form.Item>
        <ButtonComponent text="Salvar" onSubmit={onSubmit} size="large" type="primary" htmlType="submit" />
      </Form.Item>
    </Form>
  );
}

export default CategoryForm;
