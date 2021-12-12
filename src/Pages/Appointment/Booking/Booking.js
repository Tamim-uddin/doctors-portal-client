
import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingsuccessfull}) => {
    const { name, time, space, price} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
       <>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py: 5}}>
                <Typography variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{mb: 2}}>
                    Price ${price}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{mb: 2}}>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
            </Paper>         
        </Grid>
        <BookingModal
         date={date}
         booking={booking}
         openBooking={openBooking}
         handleBookingClose={handleBookingClose}
         setBookingsuccessfull={setBookingsuccessfull}
        ></BookingModal>
       </>
            
        
    );
};

export default Booking;