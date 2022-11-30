import React from "react";

import {useAuthApp} from "../../hooks";
import {Box, Typography} from "@mui/material";

export const HomePage = () => {
    const { checkAdmin } = useAuthApp();

    if (checkAdmin()) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box>
                    <Typography variant="h3">Congratulations you are an admin!</Typography>
                </Box>
                <Box>
                    <iframe
                        src="https://giphy.com/embed/OV606AIcx31za"
                        width="480"
                        height="246"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen
                    />
                </Box>
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box>
                <Typography variant="h3">I'm sorry, you don't have much right here</Typography>
            </Box>
            <Box>
                <iframe
                    src="https://giphy.com/embed/3d08SxjTjvfpUQAOYn"
                    width="480"
                    height="480"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                />
            </Box>
        </Box>
    )
}
