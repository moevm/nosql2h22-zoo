import React from "react";

import {Box, Typography} from "@mui/material";

import {TimetableTable} from "../../components";
import {request} from "../../utils";

export const TimetablePage = () => {
    const [timetables, setTimetables] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'timetable').then(setTimetables)
    }, []);

    return (
        <Box display="flex" flexDirection="column">
            <Box>
                <Typography variant="h3">Timetable</Typography>
            </Box>
            <TimetableTable timetables={timetables}/>
        </Box>
    );
}
