import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useQuery } from 'react-query';
const ToolsDetails = () => {
  const [details, setDetails] = useState({})
  const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit, watch, reset } = useForm();
  const { id } = useParams();
  const { data, isLoading } = useQuery('/tool', () =>
    axios.get(`https://manu-project-server.vercel.app/tool/${id}`).then(response => {
      setDetails(response.data)
    })
  )
  if (isLoading) {
    return <Loading />
  }

  const onSubmit = async data => {
    const quantity = watch("min_order");
    const order = {
      name: user?.displayName,
      email: user?.email,
      price: details.price,
      quantity,
      productName: details.name,
      img: details.img

    }
    await axios.post("https://manu-project-server.vercel.app/orders", order)
      .then((response) => {
        if (response.data.insertedId) {
          toast(`Your ${details.name} Ordered Successfully`)
          reset()
        }
      })
  }
  return (
    <div className="container mx-auto my-14">
    <div className="reviews-content my-6">
        <h5>FEATURE OF</h5>
        <h2>OUR  TOOLS DETAILS</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <div className="w-full p-4">
            <div>
              <img src={details.img} alt="" className="block mx-auto w-2/4" />
            </div>
            <div className="card-content">
              <h1>{details.name}</h1>
              <p>{details.description}</p>
              <div className="sm:flex sm:items-center sm:justify-between  font-medium">
                <h3 className="flex items-center">Minimum-Quantity :
                  <h1 className="ml-2">{details.minimumOrderQuantity}</h1>
                </h3>
                <h3 className="flex items-center font-medium">
                  Available-Quantity :
                  <h1 className="ml-2">{details.availableQuantity}</h1>
                </h3>
              </div>
              <div className="flex justify-between">
                <h6 className="tools-head flex items-center py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fcca03" className="w-8 h-8 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {details.price}</h6>
              </div>
            </div>
          </div>
        </div>

        {/* 
        ===========
         Form 
         ===========
         */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              readOnly
              placeholder={user?.displayName}
              className="input-feild shadow-xl"
            />
          </div>

          <div className="form-control">
            <input
              placeholder={user?.email}
              className="input-feild shadow-xl"
              readOnly
            />
          </div>
          <div className="form-control">
            <input
              placeholder={` ${details.name} Available-Quantity : ${details.availableQuantity} Pices`}
              readOnly
              className="input-feild shadow-xl"
            />
          </div>
          <div className="form-control">
            <input
              placeholder={`Minimum-Order-Quantity : ${details.minimumOrderQuantity} Pices`}
              className="input-feild shadow-xl"
              {...register("min_order", {
                required: {
                  value: true,
                  message: 'Minimum Order Quantity is Required'
                },
              })}
            />
            <label className="label">
              {
                parseInt(details?.availableQuantity) < parseInt(watch().min_order) ? (
                  <span className="text-red-500 mx-auto font-medium">
                    You can't order then stock ?
                  </span>
                )
                  : parseInt(details?.minimumOrderQuantity) > parseInt(watch().min_order) ? (
                    <span className="text-red-500 mx-auto font-medium">
                      You can't order less then minimum ?
                    </span>
                  ) : (

                    ""
                  )}
              {
                errors.min_order?.type === "required" && (
                  <span className="lebel-text-alt text-red-500">
                    {errors.min_order.message}
                  </span>
                )
              }
            </label>
          </div>
          <div className="form-control">
            <input
              placeholder={` $${details.price} `}
              readOnly
              className="input-feild shadow-xl"
            />
          </div>
          <div className="mx-auto w-10/12 mt-4">
            {
              parseInt(details?.availableQuantity) < parseInt(watch().min_order) || parseInt(details?.minimumOrderQuantity) > parseInt(watch().min_order) ? (
                <button className="signup-button" disabled>Order-Now</button>
              ) : (
                <button className="signup-button">Order-Now</button>
              )
            }
          </div>
        </form>
      </div>

    </div>
  );
};

export default ToolsDetails;