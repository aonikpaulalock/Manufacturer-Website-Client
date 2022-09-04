import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import image from "../../Asset/Reviews/Profil-1.png"
const MyProfile = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const url = "http://localhost:4000/profile"
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab ad neque! Eaque, officiis tempora.</p>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4  pb-8 pt-3">
        <div className="flex justify-center items-center">
          <img src={image} alt="" />
        </div>
        <div>
          <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input
              className='input-feild shadow-md input-feild-2'
              placeholder="Enter Your Name"
              autoComplete='off'
              {...register
                ("name", { required: true, maxLength: 20 })
              }
            />

            <input
              className='input-feild shadow-md input-feild-2'
              placeholder="Enter Your Email"
              autoComplete='off'
              type="email" {...register("email")}
            />

            <textarea
              className='input-feild shadow-md input-feild-2'
              placeholder='Say Somethings'
              row="4"
              autoComplete='off'
              {...register("description")} />

            <input
              className='input-feild shadow-md input-feild-2'
              placeholder='Enter Your Location'
              autoComplete='off'
              type="text" {...register("location")}
            />

            <input
              className='input-feild shadow-md input-feild-2'
              placeholder='Enter your phone number'
              type="text"
              autoComplete='off'
              {...register("phoneNumber")}
            />

            <div className="w-11/12 mt-3">
              <button class="signup-button">Update - Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;