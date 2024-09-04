import { createTheme } from '@mui/material';
import React from 'react'

const Theme = () => {

    const theme = createTheme({
        palette: {
            // mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#00A9B9',
                light: '#00A9B9',
                dark: '#00A9B9',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#49BEFF',
                light: '#E8F7FF',
                dark: '#23afdb',
                contrastText: '#ffffff',
            },
        },
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif'
            ].join(','),
        }
    });

    return theme
}

export default Theme