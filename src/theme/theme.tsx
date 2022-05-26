import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#425563',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#00B388',
            contrastText: '#ffffff'
        },
        background: {
            paper: '#ffffff',
            default: '#f7f6f3'
        }

    },
    typography: {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
        fontSize: 12
    }
});

export default theme