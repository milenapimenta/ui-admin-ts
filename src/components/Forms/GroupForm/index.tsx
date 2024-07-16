import React from 'react';
import { Form, Input} from 'antd';
import IGroupFormProps from '../../../interfaces/IGroupFormProps';
import ButtonComponent from '../../ButtonComponent';

const GroupForm: React.FC<IGroupFormProps> =
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
                label="Username"
                name="username"
                rules={[{ required: true, message: 'O campo username é obrigatório!' }]}
                valuePropName={initialValues?.username}
              >
                <Input
                  size="large"
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  value={initialValues?.username}
                />
              </Form.Item>
            </div>
          </div>

          <Form.Item
            label="Descrição"
            name="email"
            rules={[{ required: true, message: 'O campo Descrição é obrigatório!' }]}
            valuePropName={initialValues?.description}
          >
            <Input
              size="large"
              onChange={(e) => handleInputChange('description', e.target.value)}
              value={initialValues?.description}
            />
          </Form.Item>

          <Form.Item>
            <ButtonComponent text='Salvar' onSubmit={onSubmit}/>
          </Form.Item>
        </Form>
    </>
  );
};

export default GroupForm;
