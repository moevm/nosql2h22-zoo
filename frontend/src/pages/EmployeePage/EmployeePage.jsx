import React from "react";

import {Box, Button, Typography} from "@mui/material";
import { Navigate } from "react-router-dom";

import {EmployeeTable} from "../../components";
import {request} from "../../utils";
import {useAuthApp, useModal} from "../../hooks";
import {appRoutes, ModalId} from "../../constants";
import {Add} from "@mui/icons-material";

export const EmployeePage = () => {
    const { openModal } = useModal();
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
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h3">Employees</Typography>
                </Box>
                <Box>
                    <Button
                        startIcon={<Add />}
                        onClick={() => {openModal(ModalId.EmployeeCreate)}}
                        variant="contained"
                    >
                        Add Employee
                    </Button>
                </Box>
            </Box>
            <EmployeeTable employees={employees}/>
        </Box>
    );
}
