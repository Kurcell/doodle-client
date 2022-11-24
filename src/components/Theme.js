import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#94b49f',
        },
        secondary: {
            light: '#D3C9B7',
            main: '#B4946C',
            dark: '#773F1A',
        },
        background:{
            default: '#D3C9B7',
        }
    },
    typography: {
        allVariants: {
            fontFamily: "'Varela Round', sans-serif",
        },
        h1: {
            fontFamily: "'Rubik Mono One', sans-serif",
        },
    },
});

export const landingTheme = createTheme({
    palette: {
        primary: {
            main: '#94b49f',
        },
        secondary: {
            light: '#D3C9B7',
            main: '#B4946C',
            dark: '#773F1A',
        },
        background:{
            default: '#94b49f',
        }
    },
});