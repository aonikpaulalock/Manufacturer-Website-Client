import React from 'react';

const Review = ({ review }) => {
  const { img, des, name, rating } = review
  return (

    <div className="review-container border-t shadow-lg">
      <div className="flex flex-col items-center pb-10">
        <img className="review-image" src={img} alt="" />
        <div className="p-3">
          <h5 className="review-name">{name}</h5>
          <h3 className="text-center font-semibold text-[#fcca03] my-2">{rating}</h3>
          <p className="review-des text-center">{des}</p>
        </div>
      </div>
    </div>

  );
};

export default Review;