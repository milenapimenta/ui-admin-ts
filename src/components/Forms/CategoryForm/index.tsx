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

  return (
    <>
      <Form
        layout="vertical"
        onFinish={onSubmit}
      >
        <div className={styles.form}>
            <div className={styles.input}>
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: 'O campo nome é obrigatório!' }]}
                valuePropName={initialValues?.name}
              >
                <InputComponent
                  size="large"
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  value={initialValues?.name}
                />
              </Form.Item>
            </div>

            <div style={{ width: '49%' }}>
              <Form.Item
                label="Slug"
                name="slug"
                rules={[{ required: true,  message: 'O campo slug é obrigatório!'}]}
                valuePropName={initialValues?.slug}
              >
                <InputComponent
                  size="large"
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  value={initialValues?.slug}
                />
              </Form.Item>
            </div>
          </div>

          <Form.Item>
            <ButtonComponent text="Salvar" onSubmit={onSubmit} size="large" type="primary" htmlType="submit" />
          </Form.Item>
      </Form>
    </>
  )
}

export default CategoryForm;
