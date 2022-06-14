import { Box, Container, Grid } from "@mui/material"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { Fragment, useCallback, useEffect, useState } from "react"
import { string } from "yup"
import { CommentsModel } from "../../domain/models/comments"
import { PraiasModel } from "../../domain/models/praias"
import { RestauranteModel } from "../../domain/models/restaurantes"
import { PraiasRead } from "../../domain/useCase/read-praias"
import { RestauranteRead } from "../../domain/useCase/read-restaurante"
import Header from "../component/styles/header"
import CommentBox from "../component/ui/comments/comment-box"
import Information from "../component/ui/information/information"

type Props = {
    praiasGet: PraiasRead
    restauranteGet: RestauranteRead
}

const mock = {
    url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, minima exercitationem quae velit facere ipsam eius deleniti ducimus quidem quam alias laboriosam quis error eos? Excepturi blanditiis ipsum corrupti qui.'
}

const Info: React.FC<Props> = ({ praiasGet, /* pageId */ restauranteGet }: Props) => {
    const [data, setData] = useState<PraiasModel | RestauranteModel>()
    const [loading, setLoading] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [comment, setComment] = useState<CommentsModel[]>()
    const router = useRouter()
    const query = router.query.info as string

    const getPraias = useCallback(async () => {
        await praiasGet.byId(query as string).then((praia: PraiasModel) => {
            setData(praia);
            setLoading(false);
        });

    }, [praiasGet, query])

    const getRestaurante = useCallback(async () => {
        await restauranteGet.byId(query as string).then((restaurante: RestauranteModel) => {
            setData(restaurante);
            setLoading(false);
        });
    }, [query, restauranteGet])

    const retrieveFields = useCallback(async () => {
        if (query.includes('p')) {
            await getPraias();
        }
        if (query.includes('r')) {
            await getRestaurante()
        }

    }, [getPraias, getRestaurante, query])

    useEffect(() => {
        router.isReady ? retrieveFields() : console.log('router is not ready', query);
    }, [query, retrieveFields, router.isReady])

    return (
        <Fragment>
            <Header />
            <Container >
                <main >
                        <section id='info'>
                        <Box sx={{
                            width: '100%',
                            height: "80%",
                            mb: 20,
                        }}>
                            <Information 
                                name={data?.name!}
                                information={data?.description!}
                                urls={data?.files!}
                                geo={data?.geoResult?.point!} />
                        </Box>
                    </section>
                    <section id='comments'>
                        <Box sx={{
                            mt: 20,
                            mb: 2,
                            width: '100%',
                            height: "80%",
                        }}>
                            <Grid container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                                <Grid item xs={12} md sm>
                                    <CommentBox name={"daniel"} comment={mock.comment} date={"22/22/2022"} imgUrl={mock.url} />
                                </Grid>
                                <Grid item xs={12} md sm>
                                    <CommentBox name={"jorge"} comment={mock.comment} date={"22/22/2022"} imgUrl={mock.url} />
                                </Grid>
                                <Grid item xs={12} md sm>
                                    <CommentBox name={"daniel"} comment={mock.comment} date={"22/22/2022"} imgUrl={mock.url} />
                                </Grid>
                            </Grid>
                        </Box>
                    </section>
                    
                </main>
            </Container>
            <footer>
            </footer>
        </Fragment>

    )
}

export default Info