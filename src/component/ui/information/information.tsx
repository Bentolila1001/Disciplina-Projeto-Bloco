import { Container, Divider, Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Fragment } from "react"
import Maps from "../maps/maps"
import InformatioCard from './information-card'

type props = {
    name: String
    information: String
    urls: String[]
}

const Information: React.FC<props> = ({ name, information, urls }: props) => {

    const center = {
        lat: 44,
        lng: -80
    };

    return (
        <Fragment>
            <Box
                sx={{
                    mt: 15,
                    mb: 30,
                    width: '100%',
                    height: 300,
                }}>
                <Grid
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs sm md >
                        <div>
                            <Typography
                                variant="h3"
                                component="h3"
                            >
                                {name}
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                variant="h5"
                                noWrap
                                component="h5"
                                sx={{
                                    mt: 5,
                                }}>
                                Detalhes:
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                component="h5"
                                sx={{
                                    mt: 5,
                                    mr: 4
                                }}>
                                {information}
                            </Typography>
                        </div>
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={{ mr: 8 }}>
                    </Divider>
                    <Grid item xs sm md>
                        <InformatioCard name="praia" imgUrl="/img.jpg" />
                        <InformatioCard name="praia" imgUrl="/img.jpg" />
                    </Grid>
                    <Grid item xs sm md >
                        <Maps coordenadas={center} />
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Information