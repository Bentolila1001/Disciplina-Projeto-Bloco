import { Stack, Button, Container } from '@mui/material'
import type { NextPage } from 'next'
import { Fragment } from 'react'
import CarouselComponent from '../component/ui/carousel/carousel'
import LastEvents from '../component/ui/events/next-events'
import Header from '../component/styles/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Home
