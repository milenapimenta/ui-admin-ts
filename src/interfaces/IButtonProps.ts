import { ButtonProps } from "antd";

interface IButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  text?: string | null;
}

export default IButtonProps;
