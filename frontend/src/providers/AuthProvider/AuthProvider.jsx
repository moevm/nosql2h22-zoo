import React from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth ] = React.useState(false);

    const login = async () => {}
    const logout = async () => {}

    const contextValue = React.useMemo(() => {
        return { isAuth, login, logout };
    }, [isAuth, login, logout]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
