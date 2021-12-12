import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175
    
}

const AppointmentBg = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img style={{width: 400, marginTop: '-110px'}} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', textAlign: 'left' }}>
                   <Box >
                        <Typography variant="h6" sx={{ mb: 3 }} style={{color: '#41BFAD'}}> 
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ my: 3}} style={{color: 'white'}}>
                            Make an Appointment
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 3 }} style={{color: 'white', fontSize: 13, fontWeight: 300}}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta culpa laudantium animi molestias architecto quas suscipit itaque cupiditate asperiores numquam.
                        </Typography>
                        <Button variant="contained" style={{backgroundColor: '#41BFAD'}}>Learn More</Button>
                   </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBg;