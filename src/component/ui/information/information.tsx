import { Container, Divider, Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Fragment } from "react"
import Maps from "../maps/Maps"
import InformatioCard from './information-card'

type props = {
    name: String
    information: String
    urls: String[]
}

const Information: React.FC<props> = ({ name, information, urls }: props) => {

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <Fragment>
            <Box
                sx={{
                    mt: 20,
                    width: '100%',
                    height: 300,
                }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs>
                        <div>
                            <Typography
                                variant="h3"
                                noWrap
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
                                    mt: 10,
                                }}>
                                Detalhes:
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                noWrap
                                component="h5"
                                sx={{
                                    mt: 10,
                                }}>
                                {information}
                            </Typography>
                        </div>
                    </Grid>
                    <Divider orientation="vertical" flexItem>
                    </Divider>
                    <Grid item xs>
                        <InformatioCard />
                        <InformatioCard />
                    </Grid>
                    <Grid item xs>
                        <Maps coordenadas={center} />
                    </Grid>
                </Grid>
            </Box>


        </Fragment>
    )
}

export default Information