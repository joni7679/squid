import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email) => {
        const fakeUser = {
            email,
            name: "Demo User",
        };
        localStorage.setItem("token", "fake-jwt-token-123");
        localStorage.setItem("user", JSON.stringify(fakeUser));
        setUser(fakeUser);
    };
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
