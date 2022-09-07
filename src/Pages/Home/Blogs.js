import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
const Blogs = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className="container mx-auto md:px-10 md:my-14 my-8 px-4">
    <div className="reviews-content my-6">
        <h5>FEATURE OF</h5>
        <h2>OUR BLOGS</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {
          blogs?.map(blog =>
            <div className="rounded shadow-lg" key={blog._id}>
              <div className="w-full p-4">
                <div>
                  <img src={blog.img} alt="" className="" />
                </div>
                <div className="card-content mt-4">
                  <h2 className="head">{blog.subTitle}</h2>
                  <p className="blog">{blog.description.slice(0, 73)}</p>
             <div>
              <h6 className="flex items-center font-semibold text-md text-[#333] cursor-pointer py-2" onClick={() => navigate(`/blog/${blog._id}`)}>Read More 
              <Icon icon="bx:arrow-to-right" className="read" />
              </h6>
             </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Blogs;