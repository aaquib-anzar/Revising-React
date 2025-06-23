import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import ProtectedRoute from "./ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import App from "./App";

const appRouter = createBrowserRouter([
  {
    path: "/", // Layout route
    element: <App />, // This wraps all child routes and renders <Outlet />
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </StrictMode>
);
