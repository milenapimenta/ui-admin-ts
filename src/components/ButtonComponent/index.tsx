import React from 'react';
import { Button } from 'antd';
import IButtonProps from '../../interfaces/IButtonProps';

const ButtonComponent: React.FC<IButtonProps> = ({ icon, text}) => {
  return (
    <Button type='primary' size='large' style={{fontWeight: 'medium'}}>
      {icon && <span style={{paddingRight: '8px'}}>{icon}</span>}
      {text}
    </Button>
  );
};

export default ButtonComponent;

