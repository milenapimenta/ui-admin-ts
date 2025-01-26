interface IUserFormProps {
  handleInputChange: (fieldName: string, value: string) => void;
  onSubmit: () => void;
  initialValues?: {
    key?: React.Key;
    id?: string;
    name: string;
    lastname: string;
    email: string;
    date_birth: string;
    created_at?: string;
    password: string;
  }
}

export default IUserFormProps;
