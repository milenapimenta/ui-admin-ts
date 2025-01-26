interface IUserProps {
  key?: React.Key;
  id?: string;
  name: string;
  lastname: string;
  email: string;
  age?: number;
  date_birth: string;
  created_at?: string;
  password: string;
}

export default IUserProps;
