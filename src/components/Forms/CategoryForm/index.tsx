import styles from './styles.module.css';
import InputComponent from "../../InputComponent";
import ButtonComponent from "../../ButtonComponent";
import { Form, Select } from "antd";
import ICategoryFormProps from '../../../interfaces/ICategoryFormProps.ts';

const CategoryForm: React.FC<ICategoryFormProps> =
  (
    {
      handleInputChange,
      onSubmit,
      initialValues
    }
  ) => {

  const safeInitialValues = [
    { name: ['name'], value: initialValues?.name || '' },
    { name: ['slug'], value: initialValues?.slug || '' },
    { name: ['app_id'], value: 1 }
  ];

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      fields={safeInitialValues}
      onFieldsChange={(_, allFields) => {
        allFields.forEach((field) => {
          handleInputChange(field.name[0], field.value);
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
              onChange={(e) => handleInputChange('name', e.target.value)}
              value={initialValues?.name || ''}
            />
          </Form.Item>
        </div>

        <div style={{ width: '28%' }}>
          <Form.Item
            label={<div className={styles.formItem}>Slug</div>}
            name="slug"
          >
            <InputComponent
              size="large"
              onChange={(e) => handleInputChange('slug', e.target.value)}
              value={initialValues?.slug || ''}
            />
          </Form.Item>
        </div>

        <div style={{ width: '28%' }}>
          <Form.Item
            label={<div className={styles.formItem}>Aplicativo</div>}
            name="app_id"
          >
            <Select
              defaultValue="1"
              disabled
              options={[{ value: 1, label: 'WhatsApp' }]}
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
