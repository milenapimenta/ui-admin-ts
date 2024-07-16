interface IGroupFormProps {
  handleInputChange: (fieldName: string, value: string) => void;
  onSubmit: () => void;
  initialValues?: {
    name: string;
    username: string;
    description: string;
  };
}

export default IGroupFormProps;
