import React, { useState,createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return(
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
             {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
