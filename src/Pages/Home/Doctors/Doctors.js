import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setdoctors] = useState([]);

    useEffect( () => {
        fetch(' https://secret-tundra-43833.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setdoctors(data))
    } , [])
    return (
        <div>
            <h3>This is from doctors {doctors.length}</h3>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                    }
  
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;