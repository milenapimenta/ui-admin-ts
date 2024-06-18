import { InputProps } from "antd";

interface IInputComponentProps extends InputProps{
  name?: string;
  required?: boolean;
}

export default IInputComponentProps;
