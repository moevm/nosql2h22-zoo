import React from "react";

import {Box, Typography} from "@mui/material";

import {EmployeeTable} from "../../components";
import {request} from "../../utils";

export const EmployeePage = () => {
    const employee = request({}, '/employee', 'GET');

    return (
        <Box display="flex">
            <Box>
                <Typography variant="h2">Employees</Typography>
            </Box>
            <EmployeeTable employees={employee}/>
        </Box>
    );
}
