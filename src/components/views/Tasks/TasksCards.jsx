import { Box, Typography } from '@mui/material'
import React from 'react'

export default function TasksCards({data}) {
  return (
    <Box>
        <Typography variant='p'>TasksCards {data} </Typography>
    </Box>
  )
}
