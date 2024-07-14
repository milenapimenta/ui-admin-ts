import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
interface UserFormProps {
  handleInputChange: (fieldName: string, value: string) => void;
  onSubmit: () => void;
  initialValues?: {
    name: string;
    lastname: string;
    email: string;
    password: string;
  };
}

const UserForm: React.FC<UserFormProps> = ({ handleInputChange, onSubmit, initialValues }) => {
  const { Title } = Typography;

  return (
    <>
      <Title style={{ marginBottom: '48px' }} level={3}>
        {initialValues ? 'Editar Usuário' : 'Novo Usuário'}
      </Title>
        <Form
          layout="vertical"
          onFinish={onSubmit}
        >
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <div style={{ width: '49%' }}>
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: 'O campo nome é obrigatório!' }]}
                valuePropName={initialValues?.name}
              >
                <Input
                  size="large"
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  value={initialValues?.name}
                />
              </Form.Item>
            </div>

            <div style={{ width: '49%' }}>
              <Form.Item
                label="Sobrenome"
                name="lastname"
                rules={[{ required: true, message: 'O campo sobrenome é obrigatório!' }]}
                valuePropName={initialValues?.lastname}
              >
                <Input
                  size="large"
                  onChange={(e) => handleInputChange('lastname', e.target.value)}
                  value={initialValues?.lastname}
                />
              </Form.Item>
            </div>
          </div>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'O campo e-mail é obrigatório!' }]}
            valuePropName={initialValues?.email}
          >
            <Input
              size="large"
              onChange={(e) => handleInputChange('email', e.target.value)}
              value={initialValues?.email}
            />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'O campo senha é obrigatório!' }]}
            valuePropName={initialValues?.password}
          >
            <Input
              size="large"
              onChange={(e) => handleInputChange('password', e.target.value)}
              value={initialValues?.password}
            />
          </Form.Item>


          <Form.Item>
            <Button onSubmit={onSubmit} size="large" type="primary" htmlType="submit">
              {initialValues ? 'Atualizar' : 'Salvar'}
            </Button>
          </Form.Item>
        </Form>
    </>
  );
};

export default UserForm;
