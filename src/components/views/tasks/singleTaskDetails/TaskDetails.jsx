import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../shared/navbar/Navbar'
import { useLocation } from 'react-router-dom';

export default function TaskDetails() {

    const [dependentTaskChecked, setDependentTaskChecked] = useState(false);
    const [formData, setFormData] = useState({
        taskName: '',
        assignUser: '',
        startDate: '',
        endDate: '',
        parentTaskName: '',
        description: '',
        team: '',
        priority: '',
        stage: '',
        subStatus: '',
        subTasks: []
    });

    const [newSubTask, setNewSubTask] = useState({ subTaskName: '', status: '' });
    const [showSubTaskFields, setShowSubTaskFields] = useState(false);

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

    const handleSubTaskChange = (index, field, value) => {
        const updatedSubTasks = [...formData.subTasks];
        updatedSubTasks[index][field] = value;
        setFormData({ ...formData, subTasks: updatedSubTasks });
    };

    const handleAddSubTask = () => {
        setFormData((prevData) => ({
            ...prevData,
            subTasks: [...prevData.subTasks, newSubTask]
        }));
        setNewSubTask({ subTaskName: '', status: '' });
    };

    const tasks = [
        {
            "name": "TASK - 002552",
            "assigned_to_name": "Devi Prasad K L",
            "status": "Overdue",
            "exp_start_date": "2024-08-21",
            "exp_end_date": "2024-08-31",
            "team": "Design",
            "stages": "Pre Proposal",
            "task_description_1": null,
            "sub_status": "Not yet started",
            "parent_task": null,
            "subject": "Construction Milestones",
            "priority": "Low",
            "file_urls": [],
            "child_table": [
                {
                    "task_nme": "Site Prep",
                    "child_status": "Pending"
                },
                {
                    "task_nme": "Foundation",
                    "child_status": "Pending"
                },
                {
                    "task_nme": "Framing",
                    "child_status": "Cancelled"
                },
                {
                    "task_nme": "MEP Systems",
                    "child_status": "Completed"
                },
                {
                    "task_nme": "Insulation & Drywall",
                    "child_status": "Cancelled"
                },
                {
                    "task_nme": "Interior Finishes",
                    "child_status": "Completed"
                },
                {
                    "task_nme": "Exterior Finishes",
                    "child_status": "Pending"
                },
                {
                    "task_nme": "Final Inspections",
                    "child_status": "Completed"
                }
            ]
        },
        {
            "name": "TASK - 002553",
            "assigned_to_name": "Prabhudev A Desai",
            "status": "Overdue",
            "exp_start_date": "2024-09-02",
            "exp_end_date": "2024-09-06",
            "team": "Design",
            "stages": "Construction",
            "task_description_1": "Hello team, \nThis is description\nAnd it is multiline",
            "sub_status": "Not yet started",
            "parent_task": "TASK - 002552",
            "subject": "Construction Milestones",
            "priority": "High",
            "file_urls": [],
            "child_table": [
                {
                    "task_nme": "Site Prep",
                    "child_status": "Pending"
                },
                {
                    "task_nme": "Foundation",
                    "child_status": "Completed"
                },
                {
                    "task_nme": "Framing",
                    "child_status": "Cancelled"
                },
                {
                    "task_nme": "MEP Systems",
                    "child_status": "Completed"
                },
                {
                    "task_nme": "Insulation & Drywall",
                    "child_status": "Pending"
                },
                {
                    "task_nme": "Interior Finishes",
                    "child_status": "Pending"
                },
                {
                    "task_nme": "Exterior Finishes",
                    "child_status": "Cancelled"
                },
                {
                    "task_nme": "Final Inspections",
                    "child_status": "Completed"
                }
            ]
        }
    ];

    useEffect(() => {
        let task = tasks[0];
        task.parent_task ? setDependentTaskChecked(true) : setDependentTaskChecked(false);
        setFormData({
            taskName: task.name,
            assignUser: task.assigned_to_name,
            startDate: task.exp_start_date,
            endDate: task.exp_end_date,
            parentTaskName: task.parent_task,
            description: task.task_description_1,
            team: task.team,
            priority: task.priority,
            stage: task.stages,
            subStatus: task.sub_status,
            subTasks: task.child_table.map((subTask) => ({
                subTaskName: subTask.task_nme,
                status: subTask.child_status
            })),
        })
    }, [])



    return (
        <>
            <Box m={2}>
                <Navbar title='Task Details' />
            </Box>
            <Container maxWidth="md" sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box p={4} sx={{ width: '100%' }}>
                    {/* Static Fields in One Line with Names Below */}
                    <Stack direction="row" spacing={5} justifyContent="space-between" alignItems="center">
                        <Box textAlign="center" sx={{ width: '42%' }}>
                            <Typography variant="h5">Task ID</Typography>
                            <Typography>{formData.taskName}</Typography>
                        </Box>
                        <Box textAlign="center" sx={{ width: '42%' }}>
                            <Typography variant="h5">Team</Typography>
                            <Typography>{formData.team}</Typography>
                        </Box>

                        {/* Editable Stage Field */}
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Stage</InputLabel>
                            <Select
                                name="stage"
                                value={formData.stage}
                                onChange={handleInputChange}
                                label="Stage"
                            >
                                <MenuItem value="Closing">Closing</MenuItem>
                                <MenuItem value="Construction">Construction</MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                                <MenuItem value="Marketing">Marketing</MenuItem>
                                <MenuItem value="Option">Option</MenuItem>
                                <MenuItem value="Pre Construction">Pre Construction</MenuItem>
                                <MenuItem value="Pre Proposal">Pre Proposal</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2} mt={3}>

                            <Stack flexDirection='row' gap={2}>
                                {/* Editable Priority Field */}
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Priority</InputLabel>
                                    <Select
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleInputChange}
                                        label="Priority"
                                    >
                                        <MenuItem value="Low">Low</MenuItem>
                                        <MenuItem value="Medium">Medium</MenuItem>
                                        <MenuItem value="High">High</MenuItem>
                                        <MenuItem value="Urgent">Urgent</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Editable Sub Status Field */}
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Sub Status</InputLabel>
                                    <Select
                                        name="subStatus"
                                        value={formData.subStatus}
                                        onChange={handleInputChange}
                                        label="Sub Status"
                                    >
                                        <MenuItem value="Not yet started">Not yet started</MenuItem>
                                        <MenuItem value="In Progress">In Progress</MenuItem>
                                        <MenuItem value="Awaiting response">Awaiting Response</MenuItem>
                                        <MenuItem value="Completed">Completed</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            <TextField
                                label="Assign User"
                                variant="outlined"
                                fullWidth
                                name="assignUser"
                                value={formData.assignUser}
                                onChange={handleInputChange}
                            />

                            <Stack direction="row" gap={2}>
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

                            <Stack flexDirection='row' gap={2} width='100%' height='3rem'>
                                {/* Dependent Task Checkbox */}
                                <FormControlLabel
                                    sx={{ width: '30%' }}
                                    control={
                                        <Checkbox
                                            checked={dependentTaskChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                    }
                                    label="Add Parent Task"
                                />

                                {/* Conditional Parent Task Name Field */}
                                {dependentTaskChecked && (
                                    <TextField
                                        sx={{ width: '70%' }}
                                        label="Parent Task Name"
                                        variant="outlined"
                                        name="parentTaskName"
                                        value={formData.parentTaskName}
                                        onChange={handleInputChange}
                                    />
                                )}
                            </Stack>

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

                            {/* Sub Tasks Section */}
                            <Typography variant="h6">Sub Tasks</Typography>
                            {formData.subTasks.map((subTask, index) => (
                                <Stack direction="row" spacing={2} key={index} alignItems="center">
                                    <Select
                                        label="Status"
                                        value={subTask.status}
                                        onChange={(e) => handleSubTaskChange(index, 'status', e.target.value)}
                                        sx={{ width: '20%' }}
                                    >
                                        <MenuItem value="Pending">Pending</MenuItem>
                                        <MenuItem value="Completed">Completed</MenuItem>
                                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                                    </Select>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            wordWrap: 'break-word',
                                            maxWidth: '200px', // Adjust the width as needed
                                        }}
                                    >
                                        {subTask.subTaskName}
                                    </Typography>
                                </Stack>
                            ))}

                            {/* Button to Add More Subtasks */}
                            <Button variant="outlined" onClick={() => setShowSubTaskFields(true)}>
                                Add More Sub Tasks
                            </Button>

                            {showSubTaskFields && (
                                <Stack spacing={2}>
                                    <TextField
                                        label="Sub Task Name"
                                        variant="outlined"
                                        fullWidth
                                        name="subTaskName"
                                        value={newSubTask.subTaskName}
                                        onChange={(e) => setNewSubTask({ ...newSubTask, subTaskName: e.target.value })}
                                    />
                                    <Select
                                        label="Status"
                                        value={newSubTask.status}
                                        onChange={(e) => setNewSubTask({ ...newSubTask, status: e.target.value })}
                                        fullWidth
                                    >
                                        <MenuItem value="Pending">Pending</MenuItem>
                                        <MenuItem value="Completed">Completed</MenuItem>
                                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                                    </Select>
                                    <Button variant="contained" onClick={handleAddSubTask}>
                                        Add Sub Task
                                    </Button>
                                </Stack>
                            )}

                            <Button variant="contained" color="primary" type="submit" fullWidth>
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Container>
        </>
    )
}
