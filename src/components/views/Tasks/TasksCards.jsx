import { Stack, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { tasksData as rows } from '../../../dummyData/MockData';
import { values } from 'lodash';

/**
 * Defines the columns for the DataGrid.
 * 
 * @type {Array<object>}
 */
const columns = [
        {
        field: 'assigned_to_name',
        headerName: 'Assigned To',
        width: 130,
        valueGetter: (value, row) => row.assigned_to_name || 'NA',
        // description: 'This column has a value getter and is not sortable.',
    },
    {
        field: 'subject',
        headerName: 'Task Name',
        width: 300,
    },
    {
        field: 'exp_start_date',
        headerName: 'Start Date',
        width: 130,
    },
    {
        field: 'exp_end_date',
        headerName: 'Start Date',
        width: 130,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
    },
];

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

    /**
     * Handles cell click events in the DataGrid.
     * 
     * @param {object} details - The details of the cell click event.
     * @param {string} details.id - The ID of the clicked cell.
     */
    const handleClick = (details) => {
        console.log("Id = ", details);
    };

    return (
        <Stack justifyContent='center' alignItems='center' gap={1}>
            <Typography variant='p'>TasksCards</Typography>

            <Paper sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10, 15, 20]}
                    sx={{ border: 0 }}
                    getRowId={(row) => row.name}
                    onCellClick={(details) => handleClick(details)}
                />
            </Paper>
        </Stack>
    );
}
