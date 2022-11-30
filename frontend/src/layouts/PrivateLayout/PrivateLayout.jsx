import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import {useAuthApp} from "../../hooks";
import {AdminLayout} from "../AdminLayout";
import {appRoutes} from "../../constants";
import {UserLayout} from "../UserLayout";

export const PrivateLayout = () => {
    const { checkAuth, checkAdmin } = useAuthApp();

    if (checkAuth()) {
        if (checkAdmin()) {
            return (
                <AdminLayout>
                    <Outlet />
                </AdminLayout>
            );
        }

        return (
            <UserLayout>
                <Outlet />
            </UserLayout>
        )
    }

    return <Navigate to={appRoutes.login} replace={true} />
}
