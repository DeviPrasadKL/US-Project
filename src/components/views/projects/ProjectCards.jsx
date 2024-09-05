import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {setProjectName} from '../../../store/slices/ProjectSlice'

export default function ProjectCards({ data }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (name) => {
        dispatch(setProjectName(name));
        navigate('/tasks');
    }

    return (
        <Box>
            <Card sx={{ maxWidth: 345 }} variant="outlined" onClick={()=>{handleClick(data.name)}} key={data.name}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`http://10.10.0.33${data.property_image}`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {`${data.project_name} Some other details Extra`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}
