import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm';

const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');
const Payment = () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '',
      };
  return (
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
  )
}

export default Payment;
