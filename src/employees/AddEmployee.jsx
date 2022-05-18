import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Stack, Box } from '@mui/material';
import uuid from 'react-uuid';
import { PATHS } from '../constants';


const AddEmployee = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const add = (e) => {
        if (name === '' || email === '') {
            alert('Name and Email fields are manadatory');
            return;
        }
        props.addEmployee({ id: uuid(), name, email });
        navigateList();
    };

    const cancel = (e) => {
        navigateList();
    };

    const navigateList = () => {
        setName('');
        setEmail('');
        navigate(PATHS.EMPLOYEES.toString());
    }

    return (
        <div>
            <Typography variant='h5'>Add Employee</Typography>
            <br />
            <Stack spacing={5} sx={{ width: '50%' }}>
                <TextField id="name" label="Name" variant="outlined"
                    value={name} size='large'
                    onChange={(e) => { setName(e.target.value) }} />
                <TextField id="email" label="Email" variant="outlined"
                    value={email} size='large'
                    onChange={(e) => { setEmail(e.target.value) }} />
                <Box sx={{ display: 'flex', gap: '40px', justifyContent:"center" }}>
                    <Button variant="contained" onClick={add} sx={{ width: '30%' }}>Add</Button>
                    <Button variant="outlined" onClick={cancel} sx={{ width: '30%' }}>Cancel</Button>
                </Box>
            </Stack>
        </div>
    );
};

export default AddEmployee;