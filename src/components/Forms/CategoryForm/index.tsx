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
      initialValues// Adicionando a prop handleChange para o Select
    }
  ) => {

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
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
              onChange={(e) => handleInputChange('name', e.target.value)}
              value={initialValues?.name || ''}
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
              onChange={(e) => handleInputChange('slug', e.target.value)}
              value={initialValues?.slug || ''}
            />
          </Form.Item>
        </div>
      </div>

      <Form.Item>
        <ButtonComponent text="Salvar" onSubmit={onSubmit} size="large" type="primary" htmlType="submit" />
      </Form.Item>
    </Form>
  )
}

export default CategoryForm;
