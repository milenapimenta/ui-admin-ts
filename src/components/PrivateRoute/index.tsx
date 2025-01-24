import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element } : any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Inicializa como null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);  // Finaliza o carregamento quando a verificação terminar
  }, []);

  // Se ainda estiver carregando, não redireciona
  if (loading) {
    return <div>Loading...</div>;  // Ou qualquer outra coisa que indique que está verificando
  }

  // Se o usuário não estiver autenticado, redireciona para o login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
