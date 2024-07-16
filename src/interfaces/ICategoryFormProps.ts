interface ICategoryFormProps {
  handleInputChange: (fieldName: string, value: string) => void;
  onSubmit: () => void;
  initialValues?: {
    name: string;
    slug: string;
  };
}

export default ICategoryFormProps;
