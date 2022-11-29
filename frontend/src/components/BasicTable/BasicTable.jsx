import React from "react";
import {Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function BasicTable({ columns }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => {
                            return <TableCell align="right">{column.name}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
}
