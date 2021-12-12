import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import bg from '../../../images/footer-bg.png';

const FooterBg = {
    background: `url(${bg})`
}

const Footer = () => {
    return (
        <Box style={FooterBg} sx={{ flexGrow: 1, mt: 10 }}>
           <Container>
            <Grid container spacing={2} sx={{textAlign: "left"}}>
                    <Grid item xs={6} md={3}>
                        <Typography variant="overline" display="block" gutterBottom>
                            <br /><br />
                            Emergency Dental care <br />
                            Tooth Extraction <br />
                            Check Up <br />
                            Treatment Of Personal Diseases <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" gutterBottom component="div">
                            Services
                        </Typography><br />
                        <Typography variant="overline" display="block" gutterBottom>
                            Emergency Dental care <br />
                            Tooth Extraction <br />
                            Check Up <br />
                            Treatment Of Personal Diseases <br />
                            Check Up <br />
                            Check Up <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" gutterBottom component="div">
                            Oral Health
                        </Typography><br />
                        <Typography variant="overline" display="block" gutterBottom>                 
                            Emergency Dental care <br />
                            Tooth Extraction <br />
                            Check Up <br />
                            Treatment Of Personal Diseases <br />
                            Check Up <br />
                            Check Up <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" gutterBottom component="div">
                            Our Address
                        </Typography><br />
                        <Typography variant="overline" display="block" gutterBottom>                 
                            New York -101010 Hudson <br />
                            Yards <br /> <br />
                            <FacebookRoundedIcon sx={{color: "#41BFAD", fontSize: 40}}/>;
                            <GoogleIcon sx={{color: "#41BFAD", fontSize: 40, mx: 2}} />;
                            <TwitterIcon sx={{color: "#41BFAD", fontSize: 40}}/>
                        </Typography><br />
                        <Typography variant="h6" gutterBottom component="div">
                            Call Now
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor: "#41BFAD", mr: 15, px: 3}}>
                             +01987445
                        </Typography><br />                        
                    </Grid>                  
                </Grid>
                    <Typography variant="overline" display="block" gutterBottom>                 
                            Copyrights 2021 All Rights Desereved 
                    </Typography>
           </Container>
        </Box>
    );
};

export default Footer;