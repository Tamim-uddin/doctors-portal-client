import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
   
    
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
   

}

const Banner = () => {
    return (
        
        <Container style={bannerBg} sx={{ flexGrow: 1,  }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: 'left'}} >
                   <Box  >
                   <Typography variant="h3" style={{color: 'gray'}}>
                        Your New Smile <br />
                         Starts Here
                    </Typography>
                    <Typography variant="h5" sx={{color: 'gray', fontSize: 13, fontWeight: 300, my: 5}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla aliquam architecto pariatur debitis, animi maxime voluptatibus ex omnis voluptatem.
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#41BFAD'}}>Learn More</Button>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width: 350}} src={chair} alt="" />
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Banner;