import dayjs from 'dayjs';

interface IUserFormProps {
  key?: React.Key;
  handleInputChange: (fieldName: string, value: string) => void;
  onSubmit: () => void;
  initialValues?: {
    id?: string;
    name: string;
    lastname: string;
    email: string;
    date_birth: string | dayjs.Dayjs;
    created_at?: string;
    password: string;
  };
}

export default IUserFormProps;
