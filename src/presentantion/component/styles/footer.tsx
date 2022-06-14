import { Box, Typography } from "@mui/material"
import Link from "next/link"

const Footer = (props: any) => {
    return (
        <Box sx={{
            mt: 10, widith: '100%', height: 30
        }}>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Projeto de Bloco: Front-End
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>

    )
}

export default Footer