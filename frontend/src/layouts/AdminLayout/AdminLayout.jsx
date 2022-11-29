import React from "react";

import {BaseLayout, BaseLayoutHeader} from "../BaseLayout";
import {appRoutes} from "../../constants";

const links = [{
        name: 'home',
        url: appRoutes.root,
    }, {
        name: 'animals',
        url: appRoutes.animal,
    }, {
        name: 'employees',
        url: appRoutes.employee,
    }, {
        name: 'timetables',
        url: appRoutes.timetable,
    }, {
        name: 'tickets',
        url: appRoutes.ticket,
    },];

export const AdminLayout = ({ children }) => {
    return (
        <BaseLayout
            header={<BaseLayoutHeader links={links}/>}
            content={children}
        />
    )
}
