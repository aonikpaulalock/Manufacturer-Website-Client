import React from 'react';
import Review from './Review';
import "../../Styles.css/Reviews.css"
import image1 from "../../Asset/Reviews/reviews1.png"
import image2 from "../../Asset/Reviews/reviews2.png"
import image3 from "../../Asset/Reviews/reviews3.png"
const reviews = [
  { id: 1, name: "Stive John", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi maxime nihil iste blanditiis",img: image1 },
  { id: 2, name: "Michel Stack", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi maxime nihil iste blanditiis",img: image2 },
  { id: 3, name: "Ricky Ponty", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi maxime nihil iste blanditiis",img: image3 },
]
const Reviews = () => {
  return (
    <div className="container mx-auto px-10 my-16"> 
      <div className="reviews-content my-6">
        <h5>WHAT PEOPLE SAY</h5>
        <h1>OUR TESTIMONIALS</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {
        reviews.map(review => <Review
        key={review.id}
        review={review}
        >
        </Review>)
      }
      </div>
    </div>
  );
};

export default Reviews;