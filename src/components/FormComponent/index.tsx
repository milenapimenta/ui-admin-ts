import { Form, FormProps } from "antd";
import { ReactNode } from "react";

type FormComponentProps = {
  children: ReactNode;
};

const FormComponent: React.FC<FormComponentProps> = ({ children }) => {
  const onFinish: FormProps<any>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<any>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      style={{ width: '100%'}}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {children}
    </Form>
  );
};

export default FormComponent;
