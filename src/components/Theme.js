import { createTheme } from '@mui/material/styles';

const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#94b49f',
        },
        secondary: {
            light: '#D3C9B7',
            main: '#B4946C',
            dark: '#773F1A',
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

export default themeOptions;