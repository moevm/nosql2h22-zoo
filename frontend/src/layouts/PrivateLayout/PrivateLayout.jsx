import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import {useAuthApp} from "../../hooks";
import {EmployeeLayout} from "../EmployeeLayout";
import {appRoutes} from "../../constants";

export const PrivateLayout = () => {
    const { checkAuth } = useAuthApp();

    if (checkAuth()) {
        return (
            <EmployeeLayout>
                <Outlet />
            </EmployeeLayout>
        );
    }

    return <Navigate to={appRoutes.login} replace={true} />
}
