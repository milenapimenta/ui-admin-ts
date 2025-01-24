import { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import styles from './styles.module.css';

const { Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/login', values);
      const { token } = response.data;

      if (token) {
        // Armazenando o token no localStorage
        localStorage.setItem('token', token);

        // Fazendo a requisição para pegar os dados do usuário
        const userResponse = await api.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { name, email } = userResponse.data;

        // Armazenando os dados do usuário no localStorage
        localStorage.setItem('username', name);
        localStorage.setItem('userEmail', email);

        // Redirecionando o usuário para a página inicial
        navigate('/');
      } else {
        setError('Credenciais inválidas, tente novamente.');
      }
    } catch (error) {
      setError('Credenciais inválidas, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '20px' }}>
      <Title level={3}>Login</Title>
      <Form name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          className={styles.password}
          name="password"
          rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
        >
          <Input.Password  className={styles.password} placeholder="Senha" />
        </Form.Item>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
