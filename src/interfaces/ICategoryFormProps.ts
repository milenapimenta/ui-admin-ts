interface ICategoryFormProps {
  handleInputChange: (fieldName: string, value: string) => void;
  onSubmit: () => void;
  initialValues?: {
    name: string;
    slug: string;
    app_id?: number;
  };
}

export default ICategoryFormProps;
