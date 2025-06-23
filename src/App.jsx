import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      {/* 🔽 All child routes will render here */}
      <Outlet />
    </div>
  );
}
