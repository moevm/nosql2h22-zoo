import React from "react";

import {useCookies} from "react-cookie";
import { AuthContext } from "./AuthContext";
import {request} from "../../utils";

export const AuthProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['AUTH_USER', 'USER_ROLE']);
    const userId = React.useRef(cookies.AUTH_USER);
    const userRole = React.useRef(cookies.USER_ROLE);

    const checkAuth = React.useCallback(() => {
        return !!userId.current;
    }, []);

    const login = React.useCallback(async ({ username, password }) => {
        const data = await request('POST','login', { username, password });
        if (data.status === 'success') {
            setCookie('AUTH_USER', data?.id);
            setCookie('USER_ROLE', data?.role);
            userId.current = data?.id;
            userRole.current = data?.role;
            return { success: true }
        }

        return { success: false }
    }, [setCookie])

    const logout = React.useCallback(async () => {
        removeCookie('AUTH_USER');
        removeCookie('USER_ROLE');
        userId.current = null;
        userRole.current = null;
    }, [removeCookie]);

    const contextValue = React.useMemo(() => {
        return { userId: userId.current, userRole: userRole.current, checkAuth, login, logout };
    }, [checkAuth, login, logout]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
