import { Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




const PatientsSays = ({review}) => {
    const {name, img, des, country} = review;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 175 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {des}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <img src={img} alt="" />
                            </Grid>
                            <Grid item xs={12} md={6} sx={{mt: 2.5}}>
                                <Typography variant="h5" gutterBottom component="div" sx={{   fontSize: 20, textAlign: "left"}}>
                                    {name}
                                </Typography>
                                <Typography variant="overline" display="block" gutterBottom sx={{textAlign: "left"}}>
                                    {country}
                                </Typography>
                            </Grid>                        
                        </Grid>
                    </Box>                   
                </CardContent>               
            </Card>    
        </Grid>
    );
};

export default PatientsSays;