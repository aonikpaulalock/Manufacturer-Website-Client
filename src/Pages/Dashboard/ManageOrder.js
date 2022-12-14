import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://manu-project-server.vercel.app/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])
  return (
    <div className="container mx-auto px-10">
      <div className="parts-heading my-4">
        <h1>Manage Orders</h1>
      </div>
      <div className="shadow-2xl mb-10">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-[#3a3939]">
              <tr className="">
                <th className="font-semibold  text-center p-6 text-white">Index</th>
                <th className="font-semibold text-center p-6 text-white">Email</th>
                <th className="font-semibold  text-center p-6 text-white">Order</th>
                <th className="font-semibold text-center p-6 text-white">Quantity</th>
                <th className="font-semibold text-center p-6 text-white">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order, index) => <>
                  <tr className="border-0">
                    <th className="font-medium text-center p-6  text-[#fcca03]">{index + 1}</th>
                    <td className="font-medium text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        <Icon icon="ic:round-email" className="email-product" />
                        <p className="ml-3">{order.email}</p>
                      </div>
                    </td>
                    <td className="font-semibold text-lg text-center p-6 text-white">
                      <div className="flex justify-center items-center">

                        <p className="ml-3 mb-0 pt-1"> {order.productName}</p>
                      </div>
                    </td>
                    <td className="font-semibold text-lg text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        <Icon icon="bi:bag-plus-fill" className="quantity" />
                        <p className="ml-3 mb-0 pt-2">{order.quantity}</p>
                      </div>
                    </td>
                    <td className="font-semibold text-lg text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        {
                          order.paid ?
                          <button className="bg-[#fcca03] px-10 py-2  text-gray-700 font-semibold ">Paid</button>
                          :
                          <button className="bg-gray-600 px-10 py-2  text-white font-semibold">Pending</button>
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

export default ManageOrder;