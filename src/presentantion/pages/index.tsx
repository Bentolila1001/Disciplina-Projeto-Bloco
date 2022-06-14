import { Box, Button, Container, Divider, Grid, Link, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Footer from '../component/styles/footer'
import Header from '../component/styles/header'
import Spotlight from '../component/ui/spotlight/spotlight'
import store from '../store'
import theme from '../theme/theme'
import CarouselComponent from '../component/ui/carousel/carousel'
import { PraiasRead } from '../../domain/useCase/read-praias'
import { PraiasModel } from '../../domain/models/praias'

const imgCarrousel = ['/img.jpg', 'img4.jpg', 'img5.jpg']



const Home: React.FC = () => {

    return (
        <Fragment>
            <Header />
            <Container >
                <main >
                    <h1 style={{ display: 'none' }}>Pagina Home, Apoio ao turista</h1>
                    <section id='most-visited'>
                        <Box
                            sx={{
                                width: '100%',
                            }}>
                            <CarouselComponent images={imgCarrousel} />
                        </Box>
                        <Divider light />
                        <Box sx={{ m: 2 }}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center">
                                <Grid item sx={{ m: 1 }}>
                                    <Button variant="contained">Pontos Turísticos</Button>
                                </Grid>
                                <Grid item sx={{ m: 1 }}  >
                                    <Link href="/search/praias">
                                        <Button variant="contained">Praias</Button>
                                    </Link>
                                </Grid>
                                <Grid item sx={{ m: 1 }} >
                                    <Button variant="contained">Onde Dormir</Button>
                                </Grid>
                                <Grid item sx={{ m: 1 }} >
                                    <Link href="/search/restaurante">
                                        <Button variant="contained">Onde Comer</Button>
                                    </Link>
                                </Grid>
                                <Grid item sx={{ m: 1 }} >
                                    <Button variant="contained">Eventos</Button>
                                </Grid>
                                <Grid item sx={{ m: 1 }} >
                                    <Button variant="contained">Delegacias</Button>
                                </Grid>
                                <Grid item sx={{ m: 1 }} >
                                    <Button variant="contained">Hospitais</Button>
                                </Grid>
                                <Grid item sx={{ m: 1 }} >
                                    <Button variant="contained">Banheiros</Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider light />

                    </section>
                    <section id='last-events'>
                        <Box
                            sx={{
                                mt: 5,
                                mb: 2,
                                width: '100%',
                                height: "20%",
                            }}>
                            <Typography sx={{ mb: 5, ml: 14 }} gutterBottom variant="h3" component="div">
                                Destaque
                            </Typography>
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item>
                                    <Spotlight imgUrl={'/img.jpg'} name={'Pontos Turisticos'} description={'Conheça os principais pontos turisticos da cidade'} id={'1'} />
                                </Grid>
                                <Grid item>
                                    <Spotlight imgUrl={'/img2.jpg'} name={'Vida noturna'} description={'Descubra a vida noturna da cidade'} id={'2'} />
                                </Grid>
                                <Grid item>
                                    <Spotlight imgUrl={'/olimpico.jpg'} name={'Jogos Olimpicos'} description={'Saiba mais sobre os jogos olimpicos realizados no rio de janeiro'} id={''} />
                                </Grid>
                                <Grid item>
                                    <Spotlight imgUrl={'/img3.jpg'} name={'Meteorologia'} description={'Verifique as condições do tempo nos proximos dias'} id={'3'} />
                                </Grid>
                                <Grid item>
                                    <Spotlight imgUrl={'/log.png'} name={'Ultilidade Publica'} description={'Conheça os canais de apoio e suporte da cidade'} id={'4'} />
                                </Grid>
                                <Grid item>
                                    <Spotlight imgUrl={'/images.jpg'} name={'Gastronomia'} description={'Conheça os restaurantes mais badalados da cidade.'} id={'5'} />
                                </Grid>
                                <Grid item>
                                    <Spotlight imgUrl={'/metro.jpg'} name={'Transporte Publico'} description={'Saiba como se locomover para os principais pontos da cidade'} id={'6'} />
                                </Grid>
                                <Grid item>
                                    <Spotlight imgUrl={'/historia.jpg'} name={'Historia'} description={'Conheça mais sobre a historia da cidade'} id={'7'} />
                                </Grid>
                            </Grid>
                        </Box>
                    </section>
                </main>
                <footer>
                    <Footer sx={{ mt: 5 }} />
                </footer>
            </Container >
        </Fragment >
    )
}

export default Home
