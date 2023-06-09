import * as React from 'react';
import {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {createTrackData, formatDuration} from "./common";

const columns = [
    {
        id: 'image',
        label: '',
        minWidth: 50,
        align: 'left',

    },
    {
        id: 'title',
        label: 'Title',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },

    {
        id: 'album',
        label: 'Album',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'dateReleased',
        label: 'Date Released',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleDateString(),
    },
    {
        id: 'duration',
        label: 'Duration',
        minWidth: 170,
        align: 'right',
        format: (value) => formatDuration(value),
    },
];

export default function StickyHeadTable({data}) {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const newRows = data.map((item) => {
            return createTrackData(
                item.track.album.images[1].url,
                item.track.name,
                item.track.album.name,
                item.track.album.release_date,
                item.track.duration_ms
            );
        });
        setRows(newRows);
    }, [data]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage,
                                   page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox"
                                              tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id}
                                                           align={column.align}>
                                                    {column.id === 'image' ? (
                                                                               <img src={row.imageUrl}
                                                                                    alt="Album Cover"
                                                                                    style={{
                                                                                        width: 65,
                                                                                        height: 65
                                                                                    }}/>
                                                                           ) :
                                                     column.format
                                                     && typeof value
                                                     === 'number'
                                                     ? column.format(value)
                                                     : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
