import { useContext } from "react";
import AuthContext from "../AuthContext";

export default function DashBoard() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>📊 Dashboard (Protected)</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
