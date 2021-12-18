import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JyYp6GR0aAFrr6dcl9za1EiTmdVHoL94h9d8tsN2UZUekSEZ9K32oOm3HxId8i8bKDXsbCCLc25hK4RfwoGBibI00R9pkES6X');
 

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setappointment] = useState({});
    useEffect( () => {
        fetch(` https://secret-tundra-43833.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setappointment(data))
    } , [appointmentId])
    return (
        <div>
            <h2>PLease Pay for: {appointment.patientName} for {appointment.serviceName} </h2>
            <h4>Pay: ${appointment.price}</h4>
           {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment}/>
            </Elements>}
        </div>
    );
};

export default Payment;