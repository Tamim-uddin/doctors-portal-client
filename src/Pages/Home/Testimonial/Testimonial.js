import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import person1 from '../../../images/people-1.png';
import person2 from '../../../images/people-2.png';
import person3 from '../../../images/people-3.png';
import PatientsSays from '../PatientsSays/PatientsSays';

const reviews = [
    {
        name: 'Winson Henry',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi minus ipsum asperiores deserunt explicabo suscipit fugiat provident, minima veniam laborum.',
        img: person1,
        country: 'Columbia'
    },
    {
        name: 'Winsung Wangdu',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi minus ipsum asperiores deserunt explicabo suscipit fugiat provident, minima veniam laborum.',
        img: person2,
        country: 'Columbia'
    },
    {
        name: 'Camela Jambu',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi minus ipsum asperiores deserunt explicabo suscipit fugiat provident, minima veniam laborum.',
        img: person3,
        country: 'Columbia'
    }
]

const Testimonial = () => {
    return (
        <Container >
            <Box sx={{textAlign: "left", my: 10}}>
                <Typography variant="caption" display="block" gutterBottom sx={{color: "#41BFAD"}}>
                    Testimonial
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                    What's Our Patients <br />
                    Says
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => <PatientsSays key={review.name} review={review}></PatientsSays>)
                    }                   
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonial;