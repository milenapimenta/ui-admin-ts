import styles from './styles.module.css';
import InputComponent from "../../InputComponent";
import ButtonComponent from "../../ButtonComponent";
import { DatePicker, Form } from "antd";
import IUserFormProps from '../../../interfaces/IUserFormProps.ts';
import moment from 'moment';

const UserForm: React.FC<IUserFormProps> =
  (
    {
      handleInputChange,
      onSubmit,
      initialValues
    }
  ) => {

  // Converte safeInitialValues para o formato esperado pelo Ant Design (array de objetos)
  const safeInitialValues = [
    { name: ['name'], value: initialValues?.name || '' },
    { name: ['lastname'], value: initialValues?.lastname || '' },
    { name: ['email'], value: initialValues?.email || '' },
    { name: ['date_birth'], value: initialValues?.date_birth ? moment(initialValues.date_birth) : undefined },
    { name: ['password'], value: initialValues?.password || '' }
  ];

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      fields={safeInitialValues}  // Agora estamos passando o array para fields
      onFieldsChange={(_, allFields) => {
        // A correção: chamando handleInputChange com dois parâmetros
        allFields.forEach((field) => {
          handleInputChange(field.name[0], field.value); // Passando o fieldName e o value
        });
      }}
    >
      <div className={styles.form}>
        {/* Nome e Sobrenome */}
        <div className={styles.row}>
          <div className={styles.input30}>
            <Form.Item
              label={<div className={styles.formItem}>Nome</div>}
              name="name"
              rules={[{ required: true, message: 'O campo nome é obrigatório!' }]}
            >
              <InputComponent
                size="large"
                onChange={(e) => handleInputChange('name', e.target.value)} // Chamando com dois parâmetros
                value={initialValues?.name || ''}
              />
            </Form.Item>
          </div>

          <div className={styles.input30}>
            <Form.Item
              label={<div className={styles.formItem}>Sobrenome</div>}
              name="lastname"
              rules={[{ required: true, message: 'O campo sobrenome é obrigatório!' }]}
            >
              <InputComponent
                size="large"
                onChange={(e) => handleInputChange('lastname', e.target.value)} // Chamando com dois parâmetros
                value={initialValues?.lastname || ''}
              />
            </Form.Item>
          </div>

          <div className={styles.input30}>
            <Form.Item
              label={<div className={styles.formItem}>Data de Nascimento</div>}
              name="date_birth"
              rules={[{ required: true, message: 'O campo data de nascimento é obrigatório!' }]}
            >
              <DatePicker
                style={{ width: '100%' }}
                size='large'
                format="YYYY-MM-DD"
                value={initialValues?.date_birth ? moment(initialValues.date_birth) : undefined}
                onChange={(date) => {
                  if (date) {
                    handleInputChange('date_birth', date.format('YYYY-MM-DD')); // Formata a data para 'YYYY-MM-DD'
                  } else {
                    handleInputChange('date_birth', ''); // Se a data for removida, envia string vazia
                  }
                }}
              />
            </Form.Item>
          </div>
        </div>

        {/* Email e Senha */}
        <div className={styles.row}>
          <div className={styles.input70}>
            <Form.Item
              label={<div className={styles.formItem}>E-mail</div>}
              name="email"
              rules={[{ required: true, message: 'O campo email é obrigatório!' }]}
            >
              <InputComponent
                size="large"
                onChange={(e) => handleInputChange('email', e.target.value)} // Chamando com dois parâmetros
                value={initialValues?.email || ''}
              />
            </Form.Item>
          </div>

          <div className={styles.input30}>
            <Form.Item
              label={<div className={styles.formItem}>Senha</div>}
              name="password"
              rules={[{ required: true, message: 'O campo senha é obrigatório!' }]}
            >
              <InputComponent
                size="large"
                onChange={(e) => handleInputChange('password', e.target.value)} // Chamando com dois parâmetros
                value={initialValues?.password || ''}
              />
            </Form.Item>
          </div>
        </div>
      </div>

      {/* Botão de Salvar */}
      <Form.Item>
        <ButtonComponent text="Salvar" onSubmit={onSubmit} size="large" type="primary" htmlType="submit" />
      </Form.Item>
    </Form>
  );
}

export default UserForm;
