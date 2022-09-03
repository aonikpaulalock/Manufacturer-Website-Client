import React from 'react';

const Review = ({ review }) => {
  const { img, des, name } = review
  return (

    <div class="review-container border-t shadow-lg">
      <div class="flex flex-col items-center pb-10">
        <img class="review-image" src={img} alt="" />
        <div className="p-3">
        <h5 class="review-name">{name}</h5>
        <p class="review-des text-center">{des}</p>
        </div>
      </div>
    </div>

  );
};

export default Review;