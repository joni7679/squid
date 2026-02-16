import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "login",
        element: <Login />
    },

    {
        path: "dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        )
    }
])