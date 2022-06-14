import { Box } from "@mui/material"
import { NextPage } from "next"
import { Fragment } from "react"
import LoginForm from "../presentantion/component/forms/login-page"
import Header from "../presentantion/component/styles/header"

const Login: NextPage = () => {
    return (
        <Fragment>
            <Box>
                <Header />
            </Box>
            <Box sx={{ mt: 2 }}>
                <LoginForm />
            </Box>

        </Fragment>

    )
}

export default Login