import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Icon } from '@iconify/react';
import CheckoutForm from './CheckoutForm';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51L0ljcEIu4r15ToPEZO1QRyCh11qTJ2mq0OULDaY0ss3g41U19AcGpC1QesbBFzTLxNS0b0OvWxcLZlT1OBPzDmm00sbztt6gV');
const Payment = () => {
  const { id } = useParams()
  const url = `http://localhost:4000/order/${id}`;

  const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
    method: 'GET',
    // headers: {
    //   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    // }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto lg:my-48">
      <div className="grid md:grid-cols-2 grid-cold-1 gap-8 px-10">
        <div class="card card-side bg-[#353434] shadow-xl py-2">
          <figure>
            <img src={orders.img} alt="Movie" className="w-40 h-40" />
          </figure>
          <div class="card-body">
            <h2 class=" text-white font-semibold text-['Inter'] text-2xl">{orders.productName}</h2>
            <p className="flex items-center text-white text-xl my-2">
              <Icon icon="bi:bag-plus-fill" className="quantity mr-2 mb-2" />
              {orders.quantity}
            </p>
            <h2 className="flex items-center text-white text-xl ">
              <Icon icon="icomoon-free:price-tags" className="quantity mr-2" />
              {orders.price}
            </h2>
          </div>
        </div>
        <div class="card flex-shrink-0 bg-[#353434] shadow-xl py-2">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm orders={orders} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;