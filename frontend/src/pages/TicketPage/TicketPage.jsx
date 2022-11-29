import React from "react";

import {Box, Typography} from "@mui/material";

import {TicketTable} from "../../components";
import {request} from "../../utils";

export const TicketPage = () => {
    const [tickets, setTickets] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'ticket').then(setTickets)
    }, []);

    return (
        <Box display="flex" flexDirection="column">
            <Box>
                <Typography variant="h3">Tickets</Typography>
            </Box>
            <TicketTable tickets={tickets}/>
        </Box>
    );
}
