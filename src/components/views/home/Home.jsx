import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../shared/navbar/Navbar'

export default function Home() {
  return (
    <Box m={2}>
      <Navbar title='Home' />
      <Typography variant='h2'>Home</Typography>
    </Box>
  )
}
