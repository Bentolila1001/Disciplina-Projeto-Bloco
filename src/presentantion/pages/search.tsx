import { NextPage } from "next";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system";
import Header from "../component/styles/header";
import Footer from "../component/styles/footer";
import SearchBar from "../component/ui/search/search-bar";
import Feature from "../component/ui/search/search-feature";
import Spotlight from "../component/ui/spotlight/spotlight";
import { PraiasRead } from "../../domain/useCase/read-praias";
import { PraiasModel } from "../../domain/models/praias";
import { RestauranteRead } from "../../domain/useCase/read-restaurante";
import { RestauranteModel } from "../../domain/models/restaurantes";
import { useRouter } from "next/router";

type Props = {
    praiasGet: PraiasRead
    restauranteGet: RestauranteRead
}

type PageInfoFields = {
    name: string
    text: string
}
let pageUrl = ''
type DataTpe = PraiasModel[] | RestauranteModel[]

const infoFields = {
    'praia': { name: "Praias", text: "Lista com as praias do Rio de Janeiro" },
    'restaurante': { name: "Restaurantes", text: "Lista de restaurantes do Rio de Janeiro" }
}



const MakeSearch: React.FC<Props> = ({ praiasGet, restauranteGet }: Props) => {
    const [data, setData] = useState<DataTpe>()
    const [loading, setLoading] = useState(false)
    const [categoria, setCategoria] = useState<PageInfoFields>({
        name: '',
        text: ''
    })
    const router = useRouter()
    const query = router.query.search

    const getPraias = useCallback(async () => {
        const dataList: any = [];
        await praiasGet.all().then((allpraias) => {
            Object.entries(allpraias).forEach(val => {
                dataList.push(val);
            });
            setLoading(false);
        });
        setData(dataList);
    }, [praiasGet])

    const getRestaurante = useCallback(async () => {
        const dataList: any = [];
        await restauranteGet.all().then((allRestaurante) => {
            Object.entries(allRestaurante).forEach(val => {
                dataList.push(val);
            });
            setLoading(false);
        });
        setData(dataList);
    }, [restauranteGet])

    const retrieveFields = useCallback(async () => {
        if (query == 'praias') {
            await getPraias();
            setCategoria((prev) => {
                return { ...prev, name: infoFields.praia.name, text: infoFields.praia.text }
            })
            pageUrl = 'p'
        }
        if (query == 'restaurante') {
            await getRestaurante();
            setCategoria((prev) => {
                return { ...prev, name: infoFields.restaurante.name, text: infoFields.restaurante.text }
            })
            pageUrl = 'r'
        }
    }, [getPraias, getRestaurante, query])

    useEffect(() => {
        router.isReady ? retrieveFields() : console.log('router is not ready', query);
    }, [query, retrieveFields, router.isReady])


    return (<Fragment>
        <Box>
            <Header />
        </Box>
        <Container>
            <main>
                <section id="feature">
                    <Box sx={{ mt: 10 }}>
                        <Feature description={categoria.text} image={'/img.jpg'} imageLabel={"img"} title={categoria.name} />
                    </Box>
                </section>
                <section id='search-bar'>
                    <Box>
                        <SearchBar />
                    </Box>
                </section>
                <section>
                    <Box
                        sx={{
                            mt: 5,
                            mb: 2,
                            width: '100%',
                            height: "20%",
                        }}>
                        <Typography sx={{ mb: 5, ml: 14, fontWeight: 200 }} gutterBottom variant="h3" component="div">
                            Resultado
                        </Typography>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            {data?.map((val: any, index) => (
                                (<Grid item sx={{ mt: 1, mb: 1 }} key={index}>
                                    {<Spotlight imgUrl={val[1].files} name={val[1].name} description={val[1].description} id={`${pageUrl}${index}`} />}
                                </Grid>)
                            ))}
                        </Grid>
                    </Box>

                </section>
            </main>
        </Container>

        <footer>
            <Footer sx={{ mt: 5 }} />
        </footer>
    </Fragment>)
}

export default MakeSearch
