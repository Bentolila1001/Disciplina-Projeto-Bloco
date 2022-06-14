import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Paper, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image'

type Props = {
    description: string
    image: string
    imageLabel: string
    title: string
}

const Feature: React.FC<Props> = ({ description, image, imageLabel, title }: Props) => {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${image})`,
            }}
        >
            {<Image style={{ display: 'none' }} width={0} height={0} src={image} alt={imageLabel} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Feature