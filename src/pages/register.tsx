import { Box } from "@mui/material"
import { NextPage } from "next"
import { Fragment } from "react"
import SignUp from "../component/forms/register-page"
import Header from "../component/styles/header"

const Register: NextPage = () => {
    return (
        <Fragment>
            <Box sx={{ mb: 20 }}>
                <Header />
            </Box>
            <Box >
                <SignUp />
            </Box>
        </Fragment>

    )
}

export default Register