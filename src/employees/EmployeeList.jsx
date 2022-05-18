import React from 'react';
import { Button, TextField, Fab, Stack, Box, Typography } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import { PATHS } from '../constants';
import { Add } from '@mui/icons-material';

const EmployeeList = (props) => {

    const columns = [
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'email', headerName: 'Email', width: 300 }
    ];

    return (
        <div>
            <Typography variant='h5'>Employees</Typography>

            <Stack direction="row" spacing="1" alignItems="center" padding="10px 0px">
                <Box component="div" sx={{ display: 'flex', gap: '20px', alignItems: "center",width:'90%' }} >
                    <TextField name="name" id="name" label="Name" variant="outlined" />
                    <TextField name="email" id="email" label="Email" variant="outlined" />
                    <Button variant='contained' sx={{ width: '150px', height: '45px' }}>Apply</Button>
                </Box>
                <Box component="div"  sx={{ p: 2, display: 'flex', gap: '20px', alignItems: "center"}}>
                    <Fab size="large" color="primary" aria-label="add" href={PATHS.EMPLOYEE_ADD}>
                        <Add />
                    </Fab>
                </Box>
            </Stack>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.employees}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}
export default EmployeeList;