import React from "react";

import {useCookies} from "react-cookie";
import { AuthContext } from "./AuthContext";
import {request} from "../../utils";

export const AuthProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['AUTH_USER']);
    const userId = React.useRef(cookies.AUTH_USER);

    const checkAuth = React.useCallback(() => {
        return !!userId.current;
    }, []);

    const login = React.useCallback(async ({ username, password }) => {
        const data = await request({ username, password }, 'login', 'POST');
        if (data.status === 'success') {
            setCookie('AUTH_USER', data?.id);
            userId.current = data?.id;
            return { success: true }
        }

        return { success: false }
    }, [setCookie])

    const logout = React.useCallback(async () => {
        removeCookie('AUTH_USER');
        userId.current = null;
    }, [removeCookie]);

    const contextValue = React.useMemo(() => {
        return { userId: userId.current, checkAuth, login, logout };
    }, [checkAuth, login, logout]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
