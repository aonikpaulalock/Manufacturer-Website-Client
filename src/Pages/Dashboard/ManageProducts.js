import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Swal from 'sweetalert2';
const ManageProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://manu-project-server.vercel.app/tools")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

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
        const url = `https://manu-project-server.vercel.app/order/${id}`
        axios
          .delete(url)
          .then(response => {
            const filterDelete = products.filter(product => product._id !== id)
            setProducts(filterDelete)
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
    <div className="container mx-auto px-10">
      <div className="parts-heading my-4">
        <h1>Manage Product</h1>
      </div>
      <div className="shadow-2xl mb-10">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-[#3a3939">
              <tr className="">
                <th className="font-semibold  text-center p-6 text-white">Index</th>
                <th className="font-semibold  text-center p-6 text-white">Image</th>
                <th className="font-semibold text-center p-6 text-white">Name</th>
                <th className="font-semibold  text-center p-6 text-white">Price</th>
                <th className="font-semibold text-center p-6 text-white">Manage</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product, index) => <>
                  <tr className="border-0">
                    <th className="font-medium text-center p-6 text-[#fcca03] ">{index + 1}</th>
                    <td className="font-semibold text-lg text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        <img src={product.img} alt="" className="w-20 h-16" />
                      </div>
                    </td>
                    <td className="font-bold text-center p-6 text-white text-xl">
                      <div className="flex justify-center items-center">
                        <Icon icon="bi:cart-check-fill" className="product mr-2" />
                        <h1>{product.name}</h1>
                      </div>
                    </td>

                    <td className="font-semibold text-lg text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        <Icon icon="bi:bag-plus-fill" className="quantity" />
                        <p className="ml-3 mb-0 pt-2">{product.price}</p>
                      </div>
                    </td>
                    <td className="font-medium text-center p-6 text-white">
                      <div className="flex items-center justify-center">
                        <Icon icon="ant-design:delete-filled" className="delete delete-1" onClick={() => handleDelete(product._id)} />
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

export default ManageProducts;