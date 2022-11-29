import React from "react";

import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useAuthApp} from "../../hooks";
import {appRoutes} from "../../constants";

export const BaseLayoutHeader = ({ links }) => {
    const { logout } = useAuthApp()
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'space-around'}}>
                    {links.map((link) => (
                        <Box key={link.name}>
                            <Button
                                onClick={() => {navigate(link.url)}}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {link.name}
                            </Button>
                        </Box>
                    ))}
                    <Box>
                        <Button
                            onClick={() => {
                                logout();
                                navigate(appRoutes.login);
                            }}
                            sx={{ my: 2, color: 'white', display: 'block', backgroundColor: 'red' }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
