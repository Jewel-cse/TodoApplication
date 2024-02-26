//1:create a context

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
//2: share the created context to some other components
export default function AuthProvider({ children }) {
    //3: put some state in the context

    const [isAuthenticated, setAuthenticated] = useState(false);
    //login information
    function login(username, password) {
        if (username === "jewel" && password === "1234") {
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            return false;
        }
    }
    //logout information
    function logout() {
        setAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
