import { Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { tasksData as rows } from '../../../dummyData/MockData';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { useNavigate } from 'react-router-dom';

/**
 * Defines the columns for the DataGrid.
 * 
 * @type {Array<object>}
 */
const columns = [
    {
        field: 'name',
        headerName: 'Task ID',
        width: 150,
        headerClassName: 'header',
        cellClassName: 'cell',
    },
    {
        field: 'assigned_to_name',
        headerName: 'Assigned To',
        width: 130,
        valueGetter: (value, row) => row.assigned_to_name || 'NA',
        headerClassName: 'header',
        cellClassName: 'cell',
    },
    {
        field: 'subject',
        headerName: 'Task Name',
        width: 300,
        headerClassName: 'header',
        cellClassName: 'cell',
    },
    {
        field: 'exp_start_date',
        headerName: 'Start Date',
        width: 130,
        headerClassName: 'header',
        cellClassName: 'cell',
    },
    {
        field: 'exp_end_date',
        headerName: 'End Date',
        width: 130,
        headerClassName: 'header',
        cellClassName: 'cell',
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        headerClassName: 'header',
        cellClassName: 'cell',
    },
    {
        field: 'priority',
        headerName: 'Priority',
        width: 130,
        headerClassName: 'header',
        cellClassName: 'cell',
    },
    {
        field: 'Attachment',
        headerName: 'Attach',
        width: 100,
        sortable: false,
        headerClassName: 'header',
        renderCell: (params) => (
            <IconButton
                color="primary"
                onClick={() => handleViewClick(params.row)}
            >
                <AttachFileOutlinedIcon />
            </IconButton>
        ),
    },
    {
        field: 'Review',
        headerName: 'Review',
        width: 100,
        sortable: false,
        headerClassName: 'header',
        renderCell: (params) => (
            <IconButton
                color="primary"
                onClick={() => handleViewClick(params.row)}
            >
                <QuestionAnswerOutlinedIcon />
            </IconButton>
        ),
    },
];

/**
 * Handles the view icon click event.
 * 
 * @param {object} row - The row data of the clicked icon.
 */
const handleViewClick = (row) => {
    console.log("View details for row: ", row);
    // Implement view logic here
};

/**
 * Defines the initial pagination model for the DataGrid.
 * 
 * @type {object}
 */
const paginationModel = { page: 0, pageSize: 5 };

/**
 * A functional component that renders a DataGrid of tasks within a Paper component.
 *
 * The `TasksCards` component displays a DataGrid with task data. The grid is configured with pagination
 * and non-editable cells. Clicking on a cell triggers the `handleClick` function.
 *
 * @param {object} props - The props for the component.
 * @param {Array<object>} props.data - The data to be displayed in the DataGrid. (Currently unused in this example)
 * 
 * @returns {JSX.Element} The rendered component with a DataGrid inside a Paper element.
 */
export default function TasksCards({ data }) {

    const navigate = useNavigate();

    /**
     * Handles cell click events in the DataGrid.
     * 
     * @param {object} details - The details of the cell click event.
     * @param {string} details.id - The ID of the clicked cell.
     */
    const handleClick = (details) => {
        console.log("Id = ", details);
        navigate('/projectsDetails', { state: { details } }); 
    };

    return (
        <Stack justifyContent='center' alignItems='center' gap={1}>
            <Typography variant='p'>TasksCards</Typography>

            <Paper sx={{ height: 500, width: '100%', backgroundColor: 'background.paper' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    getRowId={(row) => row.name}
                    onCellClick={(details) => handleClick(details)}
                    checkboxSelection={false}
                    isRowSelectable={false}
                    disableSelectionOnClick
                    sx={{
                        border: 0,
                        '& .header': {
                            fontSize: '1.25rem', 
                        },
                        '& .cell': {
                            fontSize: '1rem',
                        },
                    }}
                />
            </Paper>
        </Stack>
    );
}
