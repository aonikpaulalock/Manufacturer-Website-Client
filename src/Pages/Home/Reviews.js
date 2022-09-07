import React, { useEffect, useState } from 'react';
import Review from './Review';
import "../../Styles.css/Reviews.css"
const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/reviews")
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])
  return (
    <div className="container mx-auto md:px-10 px-2 md:my-16 my-8">
      <div className="reviews-content my-6">
        <h5>WHAT PEOPLE SAY</h5>
        <h1>OUR TESTIMONIALS</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          >
          </Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;