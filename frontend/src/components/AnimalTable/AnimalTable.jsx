import React from "react";
import { BasicTable } from "../BasicTable";

export const AnimalTable = ({ animals }) => {
    const columns = [{
        name: 'id',
        render: (item) => {
            return item?.id;
        },
    }, {
        name: 'name',
        render: (item) => {
            return item?.name;
        },
    }, {
        name: 'kind',
        render: (item) => {
            return item?.kind;
        },
    }, {
        name: 'gender',
        render: (item) => {
            return item?.['gender'];
        },
    }, {
        name: 'aviary',
        render: (item) => {
            return item?.['aviary'];
        }
    }];

    return <BasicTable tableData={animals} columns={columns}/>;
}
