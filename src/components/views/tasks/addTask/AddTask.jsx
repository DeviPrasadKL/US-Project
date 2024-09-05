import React, { useState } from 'react';
import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import Navbar from '../../../shared/navbar/Navbar';

export default function AddTask() {
    const [dependentTaskChecked, setDependentTaskChecked] = useState(false);
    const [formData, setFormData] = useState({
        taskName: '',
        assignUser: '',
        startDate: '',
        endDate: '',
        parentTaskName: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Perform your submit action here
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = () => {
        setDependentTaskChecked(!dependentTaskChecked);
    };

    return (
        <>
            <Box mx={2} mt={2}>
                <Navbar title='Add Task' />
            </Box>
            <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Box p={4} sx={{ width: '100%' }}>
                    <Typography variant="h3" align="center" gutterBottom mb={3}>
                        Add Task
                    </Typography>

                    {/* Static Fields in One Line with Names Below */}
                    <Stack direction="row" spacing={5} justifyContent="space-between" alignItems="center">
                        <Box textAlign="center">
                            <Typography variant="h6">Project Name</Typography>
                            <Typography>Project Alpha</Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="h6">Team</Typography>
                            <Typography>Development</Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="h6">Stage</Typography>
                            <Typography>In Progress</Typography>
                        </Box>
                    </Stack>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2} mt={3}>
                            <TextField
                                label="Task Name"
                                variant="outlined"
                                fullWidth
                                name="taskName"
                                value={formData.taskName}
                                onChange={handleInputChange}
                            />

                            <TextField
                                label="Assign User"
                                variant="outlined"
                                fullWidth
                                name="assignUser"
                                value={formData.assignUser}
                                onChange={handleInputChange}
                            />

                            <Stack direction="row" spacing={2}>
                                <TextField
                                    label="Start Date"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    name="startDate"
                                    InputLabelProps={{ shrink: true }}
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    label="End Date"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    name="endDate"
                                    InputLabelProps={{ shrink: true }}
                                    value={formData.endDate}
                                    onChange={handleInputChange}
                                />
                            </Stack>

                            {/* Dependent Task Checkbox */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={dependentTaskChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                }
                                label="Dependent Task"
                            />

                            {/* Conditional Parent Task Name Field */}
                            {dependentTaskChecked && (
                                <TextField
                                    label="Parent Task Name"
                                    variant="outlined"
                                    fullWidth
                                    name="parentTaskName"
                                    value={formData.parentTaskName}
                                    onChange={handleInputChange}
                                />
                            )}

                            <TextField
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />

                            <Button variant="contained" color="primary" type="submit" fullWidth>
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Container>
        </>
    );
}
