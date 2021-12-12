import { Grid } from '@mui/material';
import * as React from 'react';
import Calendar from '../../Home/Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setdate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setdate={setdate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Appointments date={date}></Appointments>
                </Grid>                
            </Grid>
        
    );
};

export default DashboardHome;