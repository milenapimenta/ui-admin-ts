import React from 'react';
import { Form, Input} from 'antd';
import IGroupFormProps from '../../../interfaces/IGroupFormProps';
import ButtonComponent from '../../ButtonComponent';
import styles from './styles.module.css';

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
          <div className={styles.form}>
            <div className={styles.input}>
              <Form.Item
                label={<div className={styles.formItem}>Nome</div>}
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

            <div className={styles.input}>
              <Form.Item
                label={<div className={styles.formItem}>Username</div>}
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
            label={<div className={styles.formItem}>Descrição</div>}
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
