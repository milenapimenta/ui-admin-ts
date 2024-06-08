import { Form, Input } from "antd"
import IInputComponentProps from "../../interfaces/IInputProps";

const InputComponent = (props: IInputComponentProps) => {
  const { name, label, message, required, placeholder } = props;

  return (
    <>
       <Form.Item
          label={label}
          name={name}
          rules={[{ required: required, message: `${message}` }]}
          style={{width: '100%'}}
        >
          <Input placeholder= {placeholder} size="large" />
        </Form.Item>
    </>
  )
}

export default InputComponent;
