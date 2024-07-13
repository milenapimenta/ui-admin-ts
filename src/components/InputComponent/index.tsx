import { Input } from "antd";
import IInputComponentProps from "../../interfaces/IInputProps";
import styles from './styles.module.css';

const InputComponent = (props: IInputComponentProps) => {
  const { placeholder, onChange, value } = props;

  return (
    <>
        <Input
          className={styles.input}
          value={value}
          placeholder={placeholder}
          size="large"
          onChange={onChange}
        />
    </>
  );
};

export default InputComponent;
