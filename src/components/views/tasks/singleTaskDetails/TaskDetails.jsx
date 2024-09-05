import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../../shared/navbar/Navbar'
import { useLocation } from 'react-router-dom';

export default function TaskDetails() {

    const location = useLocation();
    const { state } = location;
    const details = state?.details; 

    console.log("details ", details);
    

    return (
        <Box m={2}>
            <Navbar title='Task Details' />

        </Box>
    )
}
