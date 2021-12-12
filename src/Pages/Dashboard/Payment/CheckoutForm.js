import React, { useEffect, useState } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import useAuth from './../../../hooks/useAuth.js';
import { CircularProgress } from '@mui/material';


const CheckoutForm = ({appointment}) => {
    const {price, patientName, _id} = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();

    const [error, seterror] = useState('');
    const [success, setsuccess] = useState('');
    const [processing, setprocessing] = useState(false);
    const [clientSecret, setclientSecret] = useState('');

    useEffect( () => {
        fetch('http://localhost:5000/create-payment-intent', {
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setclientSecret(data.clientSecret));
    } , [price])


    const handleSubmit = async (e) => {
        e.preventDefault();
       if( !stripe || !elements) {
           return;
       } 

       const card = elements.getElement(CardElement);

       if(card === null){
           return;
       }
       setprocessing(true);
       const {error, paymentMethod} = await stripe.createPaymentMethod({
           type: 'card',
           card
       });

       if(error){
           seterror(error.message);
           console.log(error);
           setsuccess('');
       }
       else{
           seterror('');
           console.log(paymentMethod)
       }
        // payment intent
        const {paymentIntent, error: intenterror} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user.email
                },
              },
            },
          );
       if(intenterror){
           seterror(intenterror.message);
           setsuccess('');
       }
       else{
           seterror('');
            setsuccess('Your payment processed successfully.');
            console.log(paymentIntent);
            setprocessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data));
       }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
            {
                error && <p style={{color: 'red'}}>{error}</p>
            }
            {
                success && <p style={{color: 'green'}}>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;