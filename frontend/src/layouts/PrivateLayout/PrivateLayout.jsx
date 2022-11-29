import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import {useAuthApp} from "../../hooks";

export const PrivateLayout = () => {
    const { checkAuth } = useAuthApp();
    console.log(checkAuth())
    if (checkAuth()) {
        return <Outlet />;
    }

    return <Navigate to="/login" replace={true} />
}
