import { Stack, Button, Container, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import { Fragment } from 'react'
import CarouselComponent from '../component/ui/carousel/carousel'
import LastEvents from '../component/ui/events/next-events'
import Header from '../component/styles/header'
import { Provider } from 'react-redux'
import store from '../store'
import theme from '../theme/theme'

const Home: NextPage = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <Container >
            <main >
              <section id='most-visited'>
                <CarouselComponent />
              </section>
              <section id='last-events'>
                <LastEvents />
              </section>
            </main>
          </Container>
        </Provider>
      </ThemeProvider>

    </Fragment>
  )
}

export default Home
