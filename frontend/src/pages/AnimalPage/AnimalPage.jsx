import React from "react";

import {Box, Button, Typography} from "@mui/material";
import { Add } from '@mui/icons-material';

import {AnimalTable} from "../../components";
import {request} from "../../utils";
import {useModal} from "../../hooks";
import {ModalId} from "../../constants";

export const AnimalPage = () => {
    const { openModal } = useModal();
    const [animals, setAnimals] = React.useState([]);

    React.useEffect(() => {
        request('GET', 'animal').then(setAnimals)
    }, []);

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h3">Animals</Typography>
                </Box>
                <Box>
                    <Button
                        startIcon={<Add />}
                        onClick={() => {openModal(ModalId.AnimalCreate)}}
                        variant="contained"
                    >
                        Add Animal
                    </Button>
                </Box>
            </Box>
            <AnimalTable animals={animals}/>
        </Box>
    );
}
