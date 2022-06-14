import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#106a9e',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#106a9e',
            contrastText: '#ffffff'
        },
        background: {
            paper: '##d8d5ce',
            default: '#f7f6f3'
        }

    },
    typography: {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
        fontSize: 12
    }
});

export default theme