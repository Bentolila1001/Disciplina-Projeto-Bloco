import { Box, Container, Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import Image from 'next/image'

type events = {
    name: string
    description: string
}
const myLoader = () => {
    return `https://dummyimage.com/300x300/000/fff`
}
const EventData: React.FC<events> = ({ name, description }: events) => {
    return (
        <Box
            sx={{
                mt: 20,
                width: '100%',
                height: 300,
            }}>
            <Grid container
                direction="row-reverse"
                justifyContent="space-evenly"
                alignItems="center">
                <Grid item>
                    <Image
                        loader={myLoader}
                        src="me.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                    />
                </Grid>
                <Grid item>
                    <Grid container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <Box>
                                <Typography variant="h4" gutterBottom component="div" >{name}</Typography >
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ width: 300 }}>
                                <Typography variant="body1" gutterBottom>
                                    {description}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Box>
    )
}

export default EventData