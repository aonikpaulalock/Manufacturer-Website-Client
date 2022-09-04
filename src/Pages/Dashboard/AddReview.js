import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import image from "../../Asset/Reviews/reviwee.png"
const AddReview = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const url = "http://localhost:4000/review";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        toast.success("Thank you your valuable feedback")
        reset()
      })
  }
  return (
    <div className="container mx-auto px-4">
      <div className="parts-heading my-4">
        <h1>Add Reviews</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab ad neque! Eaque, officiis tempora.</p>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-10 gap-4">
        <div className="flex justify-center items-center">
          <img src={image} alt="" />
        </div>
        <div className="mb-3">
          <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter Your Name"
              className='input-feild shadow-md input-feild-2'
              autoComplete='off'
              {...register
                ("name", { required: true, maxLength: 20 })
              }
            />

            <textarea
              className='input-feild shadow-md input-feild-2'
              placeholder='Enter Your Feedback'
              rows="3"
              autoComplete='off'
              {...register("des")}
            />

            <input
              className='input-feild shadow-md input-feild-2'
              placeholder='Enter feedback ratting'
              type="text"
              autoComplete='off'
              {...register("rating")}
            />

            <input
              className='input-feild shadow-md input-feild-2'
              placeholder='Enter your image link'
              type="text"
              autoComplete='off'
              {...register("img")}
            />
            <div className="w-11/12 mt-3">
              <button class="signup-button">Add Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;