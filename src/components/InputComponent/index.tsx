import { Input } from "antd";
import IInputComponentProps from "../../interfaces/IInputProps";

const InputComponent = (props: IInputComponentProps) => {
  const { placeholder, onChange, value } = props;

  return (
    <>
        <Input
          value={value}
          placeholder={placeholder}
          size="large"
          onChange={onChange}
        />
    </>
  );
};

export default InputComponent;
