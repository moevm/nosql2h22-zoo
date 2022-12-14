import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const BasicTable = ({ columns, tableData }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => {
                            return (
                                <TableCell
                                    key={column.name}
                                    sx={headerCellStyle}
                                    align="left"
                                >
                                    {column.name}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item) => {
                        return (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, maxWidth: '250px' }}
                            >
                                {columns.map((column) => {
                                    return <TableCell sx={{ maxWidth: '100px' }} align="left">{column.render(item)}</TableCell>
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const headerCellStyle = {
    backgroundColor: '#c5c5c5',
    fontWeight: 700,
    maxWidth: '100px',
};
