import React from 'react';
import { Button } from 'antd';
import IButtonProps from '../../interfaces/IButtonProps';
import styles from './styles.module.css';

const ButtonComponent: React.FC<IButtonProps> = ({ icon, text}) => {
  return (
    <Button
      className={styles.btn}
      shape="rounded"
      type='primary'
      size='large'
      style={{fontWeight: 'medium'}}
    >
      {icon && <span style={{paddingRight: '8px'}}>{icon}</span>}
      {text}
    </Button>
  );
};

export default ButtonComponent;

