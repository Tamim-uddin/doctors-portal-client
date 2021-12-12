import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 Am',
        price: 15,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30 AM',
        price: 19,
        space: 7
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '2:00 PM - 3:00 PM',
        price: 11,
        space: 9
    },
    {
        id: 4,
        name: 'Cavity protection',
        time: '3:00 PM - 3:45 PM',
        price: 18,
        space: 5
    },
    {
        id: 5,
        name: 'Cosmetic Dentistry',
        time: '5:00 PM - 6:00 PM',
        price: 16,
        space: 8
    },
    {
        id: 6,
        name: 'Teeth Orthodintcs',
        time: '8:45 PM - 9:30 PM',
        price: 13,
        space: 10 
    }
]

const AvailableAppointment = ({date}) => {
    const [BookingSuccessfull, setBookingsuccessfull] = useState(false);
    return (
        <Container>
            <Typography variant="h5" sx={{ color: 'info.main', mb: 5 }}>Available Appointment on {date.toDateString()}</Typography>
            {BookingSuccessfull && <Alert severity="success">Appointmnet booked successfully </Alert>}
            

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking 
                        key={booking.id} 
                        booking={booking} 
                        date={date} 
                        setBookingsuccessfull={setBookingsuccessfull}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;