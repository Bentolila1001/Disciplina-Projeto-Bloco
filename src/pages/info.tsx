import { Container } from "@mui/material"
import { NextPage } from "next"
import { Fragment } from "react"
import Header from "../component/styles/header"
import Information from "../component/ui/information/information"

const Info: NextPage = () => {
    return (
        <Fragment>
            <Header />
            <Container >
                <main >
                    <section id='info'>
                        <Information name={'undefined'} information={'undefined'} urls={[]} />
                    </section>
                    <section id='comments'>
                    </section>
                </main>
            </Container>
            <footer>
            </footer>
        </Fragment>

    )
}

export default Info