import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import image from "../../Asset/Project/update.png"
const MyProfile = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const url = "https://manu-project-server.vercel.app/profile"
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        toast.success("Successfully update your profile")
        reset()
      })
  }
  return (
    <div className="container mx-auto">
      <div className="parts-heading my-4">
        <h1>Update Your Profile</h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4  pb-8 pt-3">
        <div className="flex justify-center items-center">
          <img src={image} alt="" />
        </div>
        <div>
          <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input
              className='input-feild shadow-xl input-feild-2'
              placeholder="Enter Your Name"
              autoComplete='off'
              {...register
                ("name", { required: true, maxLength: 20 })
              }
            />

            <input
              className='input-feild shadow-xl input-feild-2'
              placeholder="Enter Your Email"
              autoComplete='off'
              type="email" {...register("email")}
            />

            <textarea
              className='input-feild shadow-xl input-feild-2'
              placeholder='Say Somethings'
              row="4"
              autoComplete='off'
              {...register("description")} />

            <input
              className='input-feild shadow-xl input-feild-2'
              placeholder='Enter Your Location'
              autoComplete='off'
              type="text" {...register("location")}
            />

            <input
              className='input-feild shadow-xl input-feild-2'
              placeholder='Enter your phone number'
              type="text"
              autoComplete='off'
              {...register("phoneNumber")}
            />

            <div className="md:w-11/12 w-full md:mt-3 md:mb-0 mt-2 mb-4">
              <button className="project-button w-full shadow-xl">Update - Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;