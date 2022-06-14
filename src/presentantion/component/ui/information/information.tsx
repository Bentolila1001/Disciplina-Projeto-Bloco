import { Container, Divider, Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Fragment, useEffect } from "react"
import Maps from "../maps/maps"
import InformatioCard from './information-card'

type geoLoc = {
    lat: number,
    lng: number
}
type props = {
    name: string
    information: string | any
    urls: string[] | any,
    geo: geoLoc
}

const Information: React.FC<props> = ({ name, information, urls, geo }: props) => {

    return (
        <Fragment>
            <h1 style={{ display: 'none' }}>Pagina de informação</h1>
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

                                sx={{
                                    mt: 5,
                                    mr: 4
                                }}>
                                {information}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={2} sm md>
                        <InformatioCard
                            name="Foto 1"
                            imgUrl={urls} />
                        <InformatioCard
                            name="Foto 2"
                            imgUrl={urls} />
                    </Grid>
                    <Grid item xs sm md >
                        <Maps coordenadas={geo} />
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Information