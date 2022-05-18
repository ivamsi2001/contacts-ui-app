import React from 'react';
import { Button, TextField, Typography, Stack, Box, Fab } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { PATHS } from '../constants';
import { Add, Delete } from '@mui/icons-material';


const DeptList = (props) => {
    const columns = [
        { field: 'code', headerName: 'Code', width: 250 },
        { field: 'name', headerName: 'Name', width: 300 }
    ];

    return (
        <div>
            <Typography variant='h5'>Departments</Typography>

            <Stack direction="row" spacing="1" alignItems="center" padding="10px 0px">
                <Box component="div" sx={{display: 'flex', gap: '20px', alignItems: "center", width: '90%' }} >
                    <TextField name="code" id="code" label="Code" variant="outlined" />
                    <TextField name="name" id="name" label="Name" variant="outlined" />
                    <Button variant='contained' sx={{ width: '150px', height: '45px' }}>Apply</Button>
                </Box>
                <Box component="div" sx={{ p: 2, display: 'flex', gap: '20px', alignItems: "center" }}>
                    <Fab size="large" color="primary" aria-label="add" href={PATHS.DEPARTMENT_ADD}>
                        <Add />
                    </Fab>
                    <Fab size="large" aria-label="delete">
                        <Delete />
                    </Fab>
                </Box>
            </Stack>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.departments}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}
export default DeptList;