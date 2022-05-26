import { Box, Container, Grid } from "@mui/material"
import { NextPage } from "next"
import { Fragment } from "react"
import Header from "../component/styles/header"
import CommentBox from "../component/ui/comments/comment-box"
import Information from "../component/ui/information/information"

const mock = {
    url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, minima exercitationem quae velit facere ipsam eius deleniti ducimus quidem quam alias laboriosam quis error eos? Excepturi blanditiis ipsum corrupti qui.'
}

const Info: NextPage = () => {
    return (
        <Fragment>
            <Header />
            <Container >
                <main >
                    <section id='info'>
                        <Box sx={{
                            width: '100%',
                            height: "80%",
                            mb: 20
                        }}>
                            <Information name={'daniel'} information={mock.comment} urls={[]} />
                        </Box>
                    </section>
                    <section id='comments'>
                        <Box sx={{
                            mt: 20,
                            mb: 2,
                            width: '100%',
                            height: "20%",
                        }}>
                            <Grid container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                                <Grid item xs={3} md sm>
                                    <CommentBox name={"daniel"} comment={mock.comment} date={"22/22/2022"} imgUrl={mock.url} />
                                </Grid>
                                <Grid item xs={3} md sm>
                                    <CommentBox name={"daniel"} comment={mock.comment} date={"22/22/2022"} imgUrl={mock.url} />
                                </Grid>
                                <Grid item xs={3} md sm>
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