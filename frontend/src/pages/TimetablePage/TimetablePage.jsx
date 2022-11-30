import React from "react";

import {Box, Button, Typography} from "@mui/material";

import {TimetableTable} from "../../components";
import {request} from "../../utils";
import {Add} from "@mui/icons-material";
import {ModalId} from "../../constants";
import {useModal} from "../../hooks";

export const TimetablePage = () => {
    const { openModal } = useModal();
    const [timetables, setTimetables] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'timetable').then(setTimetables)
    }, []);

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h3">Timetable</Typography>
                </Box>
                <Box>
                    <Button
                        startIcon={<Add />}
                        onClick={() => {openModal(ModalId.TimetableCreate)}}
                        variant="contained"
                    >
                        Add Timetable
                    </Button>
                </Box>
            </Box>
            <TimetableTable timetables={timetables}/>
        </Box>
    );
}
