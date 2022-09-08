import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import image from "../../Asset/Project/addProduct.png"
const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const url = "https://manu-project-server.vercel.app/tools";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        toast.success("Product added successfully")
        reset()
      })
  }
  return (
    <div className="container mx-auto px-4">
      <div className="parts-heading my-4">
        <h1>Add Products</h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-10 gap-4">
        <div className="flex justify-center items-center">
          <img src={image} alt="" />
        </div>
        <div className="mb-3">
          <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter Your Product Name"
              className='input-feild shadow-lg input-feild-2'
              autoComplete='off'
              {...register
                ("name", { required: true, maxLength: 20 })
              }
            />

            <textarea
              className='input-feild shadow-lg input-feild-2'
              placeholder='Enter Your Product Details'
              rows="3"
              autoComplete='off'
              {...register("description")}
            />

            <div className="flex md:w-11/12 w-full">
              <input
                className='input-feild shadow-lg input-3'
                placeholder='Minmum Quantity'
                type="text"
                autoComplete='off'
                {...register("minimumOrderQuantity")}
              />
              <input
                className='input-feild shadow-lg input-4'
                placeholder='Available Quantity '
                type="text"
                autoComplete='off'
                {...register("availableQuantity")}
              />
            </div>

            <input
              className='input-feild shadow-lg input-feild-2'
              placeholder='Enter Product Price'
              type="text"
              autoComplete='off'
              {...register("price")}
            />

            <input
              className='input-feild shadow-lg input-feild-2'
              placeholder='Enter your image link'
              type="text"
              autoComplete='off'
              {...register("img")}
            />
            <div className="md:w-11/12 w-full md:mt-3 md:mb-0 mt-2 mb-7">
              <button className="project-button w-full">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;