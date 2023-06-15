import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import "../../Styles.css/Login/Login.css"
const CheckoutForm = ({orders}) => {
  const stripe = useStripe()
  const elements = useElements();
  const [cardError, setCardError] = useState("")
  const [success, setSuccess] = useState("")
  const [clientSecret, setClientSecret] = useState('');
  console.log(clientSecret);
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);
  const { _id, price, email, productName } = orders;
  console.log(orders)
  useEffect(() => {
    // https://manu-project-server.vercel.app/create-payment-intent
    fetch('http://localhost:4000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });

  }, [price])
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Error Handle
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    setCardError(error?.message || "")
    setSuccess('')
    setProcessing(true);

    // Confirm
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: productName,
            email: email
          },
        },
      },
    );

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    }
    else {
      setSuccess('Congrats! Your payment is completed.')
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);

      // Send Database
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      }
      fetch(`https://manu-project-server.vercel.app/orders/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
      .then(res => res.json())
        .then(data => {
          setProcessing(false);
          console.log(data);
        })
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: 'white',
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
        <button className="bg-cyan-500 px-12 py-2  text-white font-bold mt-8 mb-4" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <h5 className='font-medium text-red-500 mt-4'>{cardError}</h5>
      }
      {
        success &&
        <div className="">
          <p className='text-green-500 font-medium pb-2 mt-4 text-center'>{success}</p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;