import { Box, Button, InputBase, makeStyles, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, Toolbar, useTheme } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";

const names = [
    'Barra',
    'Copacabana',
    'Centro da Cidade',
    'Lapa',
    'Flamengo',
    'Botafogo',
    'Leblon',
    'Jacarepagua',
    'Leme',
    'Urca',
];


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const SearchBar = () => {
    const { register, handleSubmit } = useForm();
    const theme = useTheme();
    const [personName, setPersonName] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}  >
            <Box
                sx={{
                    width: 1200,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label="buscar..." id="fullWidth" type='text' />
                <Button  sx={{mt: 2}} type='submit' variant="contained">Buscar</Button>
            </Box>
        </form >

    )
}

export default SearchBar