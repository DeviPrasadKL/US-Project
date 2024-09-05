import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../shared/navbar/Navbar'
import { CustomTabPanel, a11yProps } from '../../uiComponents/CustomTabPanel';
import ProjectCards from './ProjectCards';
import { projectData } from '../../../dummyData/MockData';

function Projects() {
    const [value, setValue] = useState(0);

    /**
     * Handles the change of selected tab.
     *
     * @param {React.SyntheticEvent} event - The event triggered by the tab change.
     * @param {number} newValue - The new index of the selected tab.
     */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Default tabs that are always present.
    const tabsList = ["Analysis", "Owned", "Active"];

    return (
        <>
            <Box m={2}>
                <Navbar title='Projects' />

                <Box my={1}>
                    <Stack sx={{ width: '100%' }} justifyContent='center' alignItems='center'>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                {
                                    tabsList.map((tabName, index) => (
                                        <Tab
                                            label={<Typography variant='h6'>{tabName}</Typography>}
                                            {...a11yProps({ index })}
                                            key={tabName}
                                            sx={{
                                                minWidth: { xs: 90, sm: 125, md: 175, lg: 275 }
                                            }}
                                        />
                                    ))
                                }
                            </Tabs>
                        </Box>
                        {
                            projectData.map((project, index) => (
                                <CustomTabPanel value={value} index={index} key={project.name}>
                                    <ProjectCards data={project} />
                                </CustomTabPanel>
                            ))
                        }
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Projects