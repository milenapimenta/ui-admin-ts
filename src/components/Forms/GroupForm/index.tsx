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

    // Converte initialValues para o formato esperado pelo Ant Design (array de objetos)
    const safeInitialValues = [
      { name: ['name'], value: initialValues?.name || '' },
      { name: ['username'], value: initialValues?.username || '' },
      { name: ['description'], value: initialValues?.description || '' }
    ];

  return (
    <>
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
              <Input
                size="large"
                onChange={(e) => handleInputChange('name', e.target.value)}
                value={initialValues?.name || ''}
              />
            </Form.Item>
          </div>

          <div className={styles.input}>
            <Form.Item
              label={<div className={styles.formItem}>Username</div>}
              name="username"
              rules={[{ required: true, message: 'O campo username é obrigatório!' }]}
            >
              <Input
                size="large"
                onChange={(e) => handleInputChange('username', e.target.value)}
                value={initialValues?.username || ''}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label={<div className={styles.formItem}>Descrição</div>}
          name="description"
          rules={[{ required: true, message: 'O campo Descrição é obrigatório!' }]}
        >
          <Input
            size="large"
            onChange={(e) => handleInputChange('description', e.target.value)}
            value={initialValues?.description || ''}
          />
        </Form.Item>

        <Form.Item>
          <ButtonComponent text="Salvar" onSubmit={onSubmit} />
        </Form.Item>
      </Form>
    </>
  );
};

export default GroupForm;
