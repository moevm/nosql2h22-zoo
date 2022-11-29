import React from "react";
import { BasicTable } from "../BasicTable";

export const EmployeeTable = ({ employees }) => {
    const columns = [{
        name: 'id',
        render: (item) => {
            return item?.id;
        },
    }, {
        name: 'username',
        render: (item) => {
            return item?.username;
        },
    }, {
        name: 'position',
        render: (item) => {
            return item?.position;
        },
    }, {
        name: 'role',
        render: (item) => {
            return item?.role;
        },
    }, {
        name: 'password',
        render: (item) => {
            return item?.password;
        }
    }];

    return <BasicTable tableData={employees} columns={columns}/>;
}
