import React from 'react';
import { Button } from 'antd';
import IButtonProps from '../../interfaces/IButtonProps';
import styles from './styles.module.css';

const ButtonComponent: React.FC<IButtonProps> = ({ icon, text}) => {
  return (
    <Button
      className={styles.btn}
      htmlType='submit'
      shape="round"
      type='primary'
      size='large'
    >
      {icon && <span className={styles.span}>{icon}</span>}
      {text}
    </Button>
  );
};

export default ButtonComponent;

