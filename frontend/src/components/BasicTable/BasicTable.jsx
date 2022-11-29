import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const BasicTable = ({ columns, tableData }) => {
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
                <TableBody>
                    {tableData.map((item) => {
                        return (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {columns.map((column) => {
                                    return <TableCell align="right">{column.render(item)}</TableCell>
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
