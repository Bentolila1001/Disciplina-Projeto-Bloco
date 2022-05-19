import { Paper, Button, Typography } from '@mui/material'
import { Box, flexbox } from '@mui/system'
import { Fragment } from 'react'
import Image from 'next/image'
import classes from './carousel.module.css'

const myLoader = () => {
    return `https://dummyimage.com/1200x300/000/fff`
}

const Carousel = () => {
    return (
        <Box
            sx={{
                mt: 10,
                width: '100%',
                height: 300,
                boxSizing: 'border-box'
            }}
        >
            <div className={classes.slideshow_container}>
                <div className={classes.fade}>
                    <div className={classes.numbertext}>1 / 3</div>
                    <Image
                        loader={myLoader}
                        src="me.png"
                        alt="Picture of the author"
                        width={1200}
                        height={500}
                    />
                    <div className={classes.text}>Caption Text</div>
                </div>
                <a className={classes.prev} >&#10094;</a>
                <a className={classes.next} >&#10095;</a>
                <br></br>
                <div style={{ textAlign: 'center' }}>
                    <span className={classes.dot} ></span>
                    <span className={classes.dot} ></span>
                    <span className={classes.dot} ></span>
                </div>
            </div>

        </Box >
    )
}


export default Carousel