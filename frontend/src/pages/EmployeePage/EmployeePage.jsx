import React from "react";

import {Box, Typography} from "@mui/material";
import { Navigate } from "react-router-dom";

import {EmployeeTable} from "../../components";
import {request} from "../../utils";
import {useAuthApp} from "../../hooks";
import {appRoutes} from "../../constants";

export const EmployeePage = () => {
    const { checkAdmin } = useAuthApp();
    const [employees, setEmployees] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'employee').then(setEmployees)
    }, []);

    if (!checkAdmin()) {
        return <Navigate to={appRoutes.root} replace={true} />
    }
    return (
        <Box display="flex" flexDirection="column">
            <Box>
                <Typography variant="h3">Employees</Typography>
            </Box>
            <EmployeeTable employees={employees}/>
        </Box>
    );
}
