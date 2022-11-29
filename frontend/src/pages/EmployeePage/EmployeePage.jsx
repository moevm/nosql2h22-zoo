import React from "react";

import {Box, Typography} from "@mui/material";

import {EmployeeTable} from "../../components";
import {request} from "../../utils";

export const EmployeePage = () => {
    const [employees, setEmployees] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'employee').then(setEmployees)
    }, []);

    return (
        <Box display="flex" flexDirection="column">
            <Box>
                <Typography variant="h2">Employees</Typography>
            </Box>
            <EmployeeTable employees={employees}/>
        </Box>
    );
}
