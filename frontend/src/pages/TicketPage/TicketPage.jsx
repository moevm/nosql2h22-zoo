import React from "react";

import {Box, Typography} from "@mui/material";

import {TicketTable} from "../../components";
import {request} from "../../utils";
import {Navigate} from "react-router-dom";
import {appRoutes} from "../../constants";
import {useAuthApp} from "../../hooks";

export const TicketPage = () => {
    const { checkAdmin } = useAuthApp();
    const [tickets, setTickets] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'ticket').then(setTickets)
    }, []);

    if (!checkAdmin()) {
        return <Navigate to={appRoutes.root} replace={true} />
    }
    return (
        <Box display="flex" flexDirection="column">
            <Box>
                <Typography variant="h3">Tickets</Typography>
            </Box>
            <TicketTable tickets={tickets}/>
        </Box>
    );
}
