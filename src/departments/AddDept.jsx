import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Stack } from '@mui/material';
import uuid from 'react-uuid';
import { PATHS } from '../constants';
import { Box } from '@mui/system';

const AddDept = (props) => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const add = (e) => {
        if (code === '' || name === '') {
            alert('Code and Name fields are manadatory');
            return;
        }
        props.addDept({ id: uuid(), code, name });
        navigateList();
    };

    const cancel = (e) => navigateList();

    const navigateList = () => {
        setCode('');
        setName('');
        navigate(PATHS.DEPARTMENTS.toString());
    }
    return (
        <div>
            <Typography variant='h5'>Add Department</Typography>
            <br />
            <Stack spacing={5} sx={{ width: '50%' }}>
                <TextField id="code" label="Code" variant="outlined"
                    value={code} size='large'
                    onChange={(e) => { setCode(e.target.value) }} />
                <TextField id="name" label="Name" variant="outlined"
                    value={name} size='large'
                    onChange={(e) => { setName(e.target.value) }} />
                <Box sx={{ display: 'flex', gap: '40px', justifyContent:"center" }}>
                    <Button variant="contained" onClick={add} sx={{ width: '30%' }}>Add</Button>
                    <Button variant="outlined" onClick={cancel} sx={{ width: '30%' }}>Cancel</Button>
                </Box>
            </Stack>
        </div>
    );
};

export default AddDept;