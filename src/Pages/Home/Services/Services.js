import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';



  const services = [
    {
        name: 'Fluoride Treatment',
        description: ' Fluoride and dental health. Fluoride is a natural mineral that builds strong teeth and prevents cavities.',
        img: fluoride
    },
    {
        name: 'Cavity Treatment',
        description: 'At home natural gingivitis treatment to help you maintain the perfect smile. All natural formula to a healthy',
        img: cavity 
    },
    {
        name: 'Whitenning Treatment',
        description: 'Our Powerful Toothpaste Collection Helps Reverse Early Gum Damage.. Toothpaste that Gives You a Healthy ',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            
           <Container>
                    <Typography variant="h6" component="div"  sx={{ m: 2, color: 'info.main' }}>
                       OUR SERVICES
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ m: 3, fontWeight: 600  }}>
                       Services We Provide
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name}
                        service={service}></Service>)
                    }
                </Grid>
           </Container>
        </Box>
    );
};

export default Services;