import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import { LogoutOutlined } from "@ant-design/icons";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove o token do localStorage
    localStorage.removeItem("token");

    // Redireciona para a página de login
    navigate("/login");
  };

  return (
    <button className={styles.logoutButton} onClick={handleLogout}>
      <LogoutOutlined className={styles.icon} /> Sair
    </button>
  );
};

export default LogoutButton;
