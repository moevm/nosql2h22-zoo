import React from "react";

import {Box} from "@mui/material";

export const BaseLayout = ({ header, content }) => {
    return (
        <Box sx={containerStyle}>
            {header}
            <Box sx={contentStyle}>{content}</Box>
        </Box>
    )
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0',
    height: '100%',
}

const contentStyle = {
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
}
