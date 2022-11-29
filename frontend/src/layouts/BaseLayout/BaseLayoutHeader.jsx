import React from "react";

import {AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BaseLayoutHeader = ({ links }) => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'space-around'}}>
                    {links.map((link) => (
                        <Box>
                            <Button
                                key={link.name}
                                onClick={() => { navigate(link.url)}}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {link.name}
                            </Button>
                        </Box>
                    ))}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
