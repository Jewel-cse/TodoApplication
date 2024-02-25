//1:create a context

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = ()=>useContext(AuthContext);
//2: share the created context to some other components
export default function AuthProvider({ children }) {
    //3: put some state in the context
    const [number, setNumber] = useState(10);
    setInterval(() => setNumber(number + 1), 10000); //number increament to each 5 seconds
    return <AuthContext.Provider value={{number}}>{children}</AuthContext.Provider>;
}
