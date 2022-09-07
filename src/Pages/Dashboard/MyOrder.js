import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import "../../Styles.css/Dashboard/MyOrder.css"
import Swal from 'sweetalert2';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
const MyOrder = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/order?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user?.email])
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure deleted item ?',
      text: "You won't be able to revert this !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:4000/order/${id}`
        axios
          .delete(url)
          .then(response => {
            const filterDelete = orders.filter(order => order._id !== id)
            setOrders(filterDelete)
          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'Success'
        )
      }
    })
  }

  return (
    <div className="container mx-auto px-4">
      <div className="parts-heading my-4">
        <h1>My Orders</h1>
      </div>
      <div className="shadow-2xl">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead className="border-b bg-[#3a3939]">
              <tr className="">
                <th className="font-semibold  text-center p-6 text-white">Index</th>
                <th className="font-semibold text-center p-6 text-white">Email</th>
                <th className="font-semibold  text-center p-6 text-white">Order</th>
                <th className="font-semibold text-center p-6 text-white">Quantity</th>
                <th className="font-semibold text-center p-6 text-white">Manage</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order, index) => <>
                  <tr className="border-0">
                    <th className="font-medium text-center p-6 text-[#fcca03] ">{index + 1}</th>
                    <td className="font-medium text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        <Icon icon="ic:round-email" className="email-product" />
                        <p className="ml-3">{order?.email}</p>
                      </div>
                    </td>
                    <td className="font-semibold text-lg text-center p-6 text-white">
                      <div className="flex justify-center items-center">
                        <Icon icon="gridicons:product-virtual" className="product" />
                        <p className="ml-3 mb-0 pt-1"> {order.productName}</p>
                      </div>
                    </td>
                    <td className="font-semibold text-lg text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        <Icon icon="bi:bag-plus-fill" className="quantity" />
                        <p className="ml-3 mb-0 pt-2">{order.quantity}</p>
                      </div>
                    </td>
                    <td className="font-medium p-2 text-white text-center">
                      <div className="flex items-center justify-center">
                        {(order.price && order.paid) ? <div>
                          <button className="bg-cyan-500 px-10 py-2  text-white font-bold ">Paid</button>
                          <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                        </div>
                          :
                          <Icon icon="ant-design:delete-filled" className="delete" onClick={() => handleDelete(order._id)} />
                        }

                        {
                          (order.price && !order.paid) &&
                          <Icon icon="fluent:payment-32-filled" className="pay" onClick={() => navigate(`payment/${order._id}`)} />
                        }
                      </div>
                    </td>
                  </tr>
                </>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;