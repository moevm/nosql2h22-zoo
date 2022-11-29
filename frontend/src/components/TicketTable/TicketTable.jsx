import React from "react";
import { BasicTable } from "../BasicTable";

export const TicketTable = ({ tickets }) => {
    const columns = [{
        name: 'id',
        render: (item) => {
            return item?.id;
        },
    }, {
        name: 'date',
        render: (item) => {
            return item?.date;
        },
    }, {
        name: 'username',
        render: (item) => {
            return item?.username;
        },
    }, {
        name: 'price',
        render: (item) => {
            return item?.['price'];
        },
    }];

    return <BasicTable tableData={tickets} columns={columns}/>;
}
