import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogsDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  useEffect(() => {
    fetch(`https://manu-project-server.vercel.app/blog/${id}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [id])
  return (
    <div className="container md:px-10 px-4 mx-auto my-10">
      <div className="reviews-content sm:my-6 my-3">
        <h5>FEATURE OF</h5>
        <h2>OUR BLOGS DETAILS</h2>
      </div>
      <div className="grid grid-cols-1">
            <div className="rounded shadow-lg" key={details._id}>
              <div className="w-full p-4 botom-border">
                <div>
                  <img src={details.img} alt="" className="" />
                </div>
                <div className="card-content mt-4 text-center">
                  <h2 className="head">{details.subTitle}</h2>
                  <h1 className="head">{details.title}</h1>
                  <p className="blog">{details.description}</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default BlogsDetails;