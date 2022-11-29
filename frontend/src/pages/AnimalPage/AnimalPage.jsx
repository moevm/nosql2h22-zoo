import React from "react";

import {Box, Typography} from "@mui/material";

import {AnimalTable} from "../../components";
import {request} from "../../utils";

export const AnimalPage = () => {
    const [animals, setAnimals] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'animal').then(setAnimals)
    }, []);

    return (
        <Box display="flex" flexDirection="column">
            <Box>
                <Typography variant="h3">Animals</Typography>
            </Box>
            <AnimalTable animals={animals}/>
        </Box>
    );
}
