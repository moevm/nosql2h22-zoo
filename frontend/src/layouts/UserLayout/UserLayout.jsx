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
        name: 'timetables',
        url: appRoutes.timetable,
    }, ];

export const UserLayout = ({ children }) => {
    return (
        <BaseLayout
            header={<BaseLayoutHeader links={links}/>}
            content={children}
        />
    )
}
