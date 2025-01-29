import styles from './styles.module.css';
import InputComponent from "../../InputComponent";
import ButtonComponent from "../../ButtonComponent";
import { DatePicker, Form } from "antd";
import IUserFormProps from '../../../interfaces/IUserFormProps.ts';
import dayjs from "dayjs";

const UserForm: React.FC<IUserFormProps> =
  (
    {
      handleInputChange,
      onSubmit,
      initialValues
    }
  ) => {

  const safeInitialValues = [
    { name: ['name'], value: initialValues?.name || '' },
    { name: ['lastname'], value: initialValues?.lastname || '' },
    { name: ['email'], value: initialValues?.email || '' },
    { name: ['date_birth'], value: initialValues?.date_birth || '' },
    { name: ['password'], value: initialValues?.password || '' }
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
        <div className={styles.row}>
          <div className={styles.input50}>
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

          <div className={styles.input50}>
            <Form.Item
              label={<div className={styles.formItem}>Sobrenome</div>}
              name="lastname"
              rules={[{ required: true, message: 'O campo sobrenome é obrigatório!' }]}
            >
              <InputComponent
                size="large"
                onChange={(e) => handleInputChange('lastname', e.target.value)}
                value={initialValues?.lastname || ''}
              />
            </Form.Item>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.input100}>
            <Form.Item
              label={<div className={styles.formItem}>E-mail</div>}
              name="email"
              rules={[{ required: true, message: 'O campo email é obrigatório!' }]}
            >
              <InputComponent
                size="large"
                onChange={(e) => handleInputChange('email', e.target.value)}
                value={initialValues?.email || ''}
              />
            </Form.Item>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.input50}>
            <Form.Item
              label={<div className={styles.formItem}>Senha</div>}
              name="password"
              rules={[{ required: true, message: 'O campo senha é obrigatório!' }]}
            >
              <InputComponent
                size="large"
                onChange={(e) => handleInputChange('password', e.target.value)}
                value={initialValues?.password || ''}
              />
            </Form.Item>
          </div>

          <div className={styles.input50}>
            <Form.Item
              label={<div className={styles.formItem}>Data de Nascimento</div>}
              name="date_birth"
              rules={[{ required: true, message: 'O campo data de nascimento é obrigatório!' }]}
            >
              <DatePicker
                size='large'
                style={{ width: '100%' }}
                format="YYYY-MM-DD"
                onChange={(date) => handleInputChange('date_birth', date ? date.format('YYYY-MM-DD') : '')}
                value={initialValues?.date_birth ? dayjs(initialValues.date_birth, "YYYY-MM-DD") : null}
              />
            </Form.Item>
          </div>
        </div>
      </div>

      <Form.Item>
        <ButtonComponent text="Salvar" onSubmit={onSubmit} size="large" type="primary" htmlType="submit" />
      </Form.Item>
    </Form>
  );
}

export default UserForm;
