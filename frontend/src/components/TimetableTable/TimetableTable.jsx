import React from "react";
import { BasicTable } from "../BasicTable";

export const TimetableTable = ({ timetables }) => {
    const columns = [{
        name: 'id',
        render: (item) => {
            return item?.id;
        },
    }, {
        name: 'day',
        render: (item) => {
            return item?.day;
        },
    }, {
        name: 'from',
        render: (item) => {
            return item?.['time_from'];
        },
    }, {
        name: 'to',
        render: (item) => {
            return item?.['time_to'];
        },
    }];

    return <BasicTable tableData={timetables} columns={columns}/>;
}
