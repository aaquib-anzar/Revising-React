import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>🔐 Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
