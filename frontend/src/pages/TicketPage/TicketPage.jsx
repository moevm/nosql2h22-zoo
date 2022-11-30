import React from "react";

import {Box, Button, Typography} from "@mui/material";

import {TicketTable} from "../../components";
import {request} from "../../utils";
import {Navigate} from "react-router-dom";
import {appRoutes, ModalId} from "../../constants";
import {useAuthApp, useModal} from "../../hooks";
import {Add} from "@mui/icons-material";

export const TicketPage = () => {
    const { openModal } = useModal();
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
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h3">Tickets</Typography>
                </Box>
                <Box>
                    <Button
                        startIcon={<Add />}
                        onClick={() => {openModal(ModalId.TicketCreate)}}
                        variant="contained"
                    >
                        Add Ticket
                    </Button>
                </Box>
            </Box>
            <TicketTable tickets={tickets}/>
        </Box>
    );
}
