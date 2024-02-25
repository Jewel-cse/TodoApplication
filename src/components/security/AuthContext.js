//1:create a context

import { createContext, useState } from "react";

export const AuthContext = createContext();
//2: share the created context to some other components
export default function AuthProvider({ children }) {
    //3: put some state in the context
    const [number, setNumber] = useState(110);

    return <AuthContext.Provider value={{number}}>{children}</AuthContext.Provider>;
}
